import { NextRequest, NextResponse } from "next/server";
import { lint } from "@/lib/wiki/lint";

export const maxDuration = 60;

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const result = await lint();
  return NextResponse.json({
    ok: true,
    findingCount: result.findings.length,
    findings: result.findings.slice(0, 20),
    summary: result.summary,
  });
}
