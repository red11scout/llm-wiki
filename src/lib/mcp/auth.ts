import { timingSafeEqual } from "crypto";

export type CallerScope = "internal" | "public";

export interface AuthResult {
  authenticated: boolean;
  scope: CallerScope;
}

function constantTimeCompare(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  return timingSafeEqual(Buffer.from(a), Buffer.from(b));
}

export function validateBearerToken(authHeader: string | null): AuthResult {
  if (!authHeader?.startsWith("Bearer ")) {
    return { authenticated: false, scope: "public" };
  }

  const token = authHeader.slice(7).trim();
  const expected = process.env.WIKI_MCP_TOKEN?.trim();

  if (!expected) {
    return { authenticated: false, scope: "public" };
  }

  if (constantTimeCompare(token, expected)) {
    return { authenticated: true, scope: "internal" };
  }

  return { authenticated: false, scope: "public" };
}
