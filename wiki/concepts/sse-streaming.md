---
title: SSE Streaming (Server-Sent Events)
kind: concept
summary: HTTP-based one-way push pattern used to stream LLM token output from a server to the browser in real time; used in the BlueAlly AI Website chat widget.
tags: [streaming, ai-integration, web]
sources: 1
updated: 2026-05-21
---

---
title: SSE Streaming (Server-Sent Events)
kind: concept
summary: HTTP-based one-way push pattern used to stream LLM token output from a server to the browser in real time; used in the BlueAlly AI Website chat widget.
tags: [streaming, ai-integration, web]
sources: 1
updated: 2026-05-21
---

Server-Sent Events (SSE) is a lightweight HTTP push mechanism where a server keeps a long-lived connection open and streams newline-delimited text events to the browser. It is the standard delivery mechanism for streaming LLM token output to a web client without WebSockets.

Within the BlueAlly ecosystem, SSE streaming is used in [[aiwebsiteblueally]] to power the AI chat widget, delivering [[anthropic-sdk]] Claude responses token-by-token to the user interface.

## Contrast with WebSockets

SSE is unidirectional (server → client only) and simpler to implement in a Next.js API route or Edge function. WebSockets are bidirectional but heavier; BlueAlly uses WebSockets in [[godwin-family-tracker]] for live updates, and SSE here for chat streaming.

## Related

- [[aiwebsiteblueally]] — primary consumer of SSE streaming in the BlueAlly ecosystem
- [[anthropic-sdk]] — the SDK whose streamed responses are delivered via SSE
- [[godwin-family-tracker]] — contrasting WebSocket usage
