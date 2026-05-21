import { createMcpHandler } from "mcp-handler";
import { validateBearerToken } from "@/lib/mcp/auth";
import { registerTools } from "@/lib/mcp/tools";

const handler = createMcpHandler(
  (server) => {
    registerTools(server, "internal");
  },
  {
    serverInfo: {
      name: "llm-wiki",
      version: "1.0.0",
    },
  },
  {
    basePath: "/api",
    maxDuration: 300,
    disableSse: true,
  }
);

async function handleRequest(request: Request): Promise<Response> {
  const auth = validateBearerToken(request.headers.get("authorization"));
  if (!auth.authenticated) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  return handler(request);
}

export { handleRequest as GET, handleRequest as POST, handleRequest as DELETE };
