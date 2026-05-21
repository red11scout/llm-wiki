import { NextRequest, NextResponse } from "next/server";
import { createHash } from "crypto";
import { writeFile, mkdir } from "fs/promises";
import { join } from "path";
import { after } from "next/server";
import { dbWrite } from "@db";
import { rawSources } from "@db/schema";

export const maxDuration = 30;

interface CapturePayload {
  sender: string;
  text: string;
  timestamp?: string;
  metadata?: Record<string, unknown>;
}

export async function POST(req: NextRequest) {
  const token = req.headers.get("authorization")?.replace("Bearer ", "");
  if (!token || token !== process.env.CAPTURE_TOKEN) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await req.json()) as CapturePayload;
  if (!body.sender || !body.text) {
    return NextResponse.json(
      { error: "sender and text are required" },
      { status: 400 }
    );
  }

  const sha256 = createHash("sha256").update(body.text).digest("hex");
  const date = body.timestamp
    ? new Date(body.timestamp).toISOString().split("T")[0]
    : new Date().toISOString().split("T")[0];
  const shortSha = sha256.slice(0, 12);
  const relativePath = `raw/imessage/${date}/${shortSha}.md`;
  const absolutePath = join(process.cwd(), relativePath);

  const frontmatter = [
    "---",
    `sender: "${body.sender}"`,
    `sha256: "${sha256}"`,
    `source: imessage`,
    `captured_at: "${new Date().toISOString()}"`,
    `ingested: false`,
    "---",
    "",
    body.text,
  ].join("\n");

  await mkdir(join(process.cwd(), `raw/imessage/${date}`), { recursive: true });
  await writeFile(absolutePath, frontmatter, "utf-8");

  const [row] = await dbWrite
    .insert(rawSources)
    .values({
      type: "imessage",
      sha256,
      filePath: relativePath,
      metadata: {
        sender: body.sender,
        timestamp: body.timestamp,
        ...body.metadata,
      },
    })
    .returning({ id: rawSources.id });

  after(async () => {
    try {
      const { ingest } = await import("@/lib/wiki/ingest");
      await ingest(relativePath);
    } catch {
      console.error(`[capture] async ingest failed for ${relativePath}`);
    }
  });

  return NextResponse.json(
    { id: row.id, sha256, filePath: relativePath },
    { status: 201 }
  );
}
