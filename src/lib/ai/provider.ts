import { createAnthropic } from "@ai-sdk/anthropic";

export const anthropic = createAnthropic();

export const sonnet = anthropic("claude-sonnet-4-6-20250514");

export const opus = anthropic("claude-opus-4-7-20250515");
