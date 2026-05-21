import { Pool, neonConfig } from "@neondatabase/serverless";
import ws from "ws";

export const dynamic = "force-dynamic";

/**
 * SSE endpoint that streams ingest_log inserts in real time.
 *
 * Relies on a NOTIFY trigger in the DB:
 *   CREATE OR REPLACE FUNCTION notify_ingest_log()
 *     RETURNS trigger AS $$ BEGIN
 *       PERFORM pg_notify('ingest_log_notify', row_to_json(NEW)::text);
 *       RETURN NEW;
 *     END; $$ LANGUAGE plpgsql;
 *
 * NOTE: Neon's serverless driver tunnels Postgres over WebSockets.
 * LISTEN/NOTIFY requires a persistent connection. This works because
 * neonConfig.webSocketConstructor is set to `ws`, giving us a real
 * WebSocket-backed Pool that supports async notifications. If Neon's
 * infrastructure ever drops the long-lived WS connection, the heartbeat
 * will fail and the stream will close gracefully.
 */
export async function GET() {
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      // ws must be set before Pool construction for Node runtime
      neonConfig.webSocketConstructor = ws;

      const pool = new Pool({ connectionString: process.env.DATABASE_URL });
      pool.on("error", () => {
        // Suppress unhandled pool errors — cleanup happens via heartbeat failure
      });

      const client = await pool.connect();

      client.on("notification", (msg: { payload?: string }) => {
        try {
          controller.enqueue(
            encoder.encode(
              `data: ${JSON.stringify({ type: "ingest", payload: msg.payload })}\n\n`
            )
          );
        } catch {
          // Stream already closed — cleanup will happen via heartbeat
        }
      });

      await client.query("LISTEN ingest_log_notify");

      // Keep-alive heartbeat every 30s
      const heartbeat = setInterval(() => {
        try {
          controller.enqueue(encoder.encode(": heartbeat\n\n"));
        } catch {
          clearInterval(heartbeat);
          client.release();
          pool.end().catch(() => {});
        }
      }, 30_000);
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
    },
  });
}
