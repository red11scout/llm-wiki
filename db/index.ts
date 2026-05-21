import { drizzle as drizzleHttp } from "drizzle-orm/neon-http";
import { drizzle as drizzleWs } from "drizzle-orm/neon-serverless";
import { neon } from "@neondatabase/serverless";
import { Pool, neonConfig } from "@neondatabase/serverless";
import * as schema from "./schema";

function getUrl(): string {
  const url = process.env.DATABASE_URL;
  if (!url) throw new Error("DATABASE_URL is not set");
  return url;
}

type ReadClient = ReturnType<typeof drizzleHttp<typeof schema>>;
type WriteClient = ReturnType<typeof drizzleWs<typeof schema>>;

let cachedRead: ReadClient | null = null;
function getReadClient(): ReadClient {
  if (cachedRead) return cachedRead;
  const sql = neon(getUrl());
  cachedRead = drizzleHttp({ client: sql, schema });
  return cachedRead;
}

let cachedWrite: WriteClient | null = null;
function getWriteClient(): WriteClient {
  if (cachedWrite) return cachedWrite;
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  neonConfig.webSocketConstructor = require("ws");
  const pool = new Pool({ connectionString: getUrl() });
  cachedWrite = drizzleWs({ client: pool, schema });
  return cachedWrite;
}

export const dbRead = new Proxy({} as ReadClient, {
  get(_target, prop) {
    const client = getReadClient();
    const value = (client as unknown as Record<PropertyKey, unknown>)[prop];
    if (typeof value === "function")
      return (value as (...args: unknown[]) => unknown).bind(client);
    return value;
  },
});

export const dbWrite = new Proxy({} as WriteClient, {
  get(_target, prop) {
    const client = getWriteClient();
    const value = (client as unknown as Record<PropertyKey, unknown>)[prop];
    if (typeof value === "function")
      return (value as (...args: unknown[]) => unknown).bind(client);
    return value;
  },
});
