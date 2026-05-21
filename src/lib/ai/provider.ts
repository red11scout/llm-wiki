import { createAnthropic } from "@ai-sdk/anthropic";
import { config } from "dotenv";

config({ path: ".env.local", override: true });

export const anthropic = createAnthropic({
  baseURL: "https://api.anthropic.com/v1",
});

export const sonnet = anthropic("claude-sonnet-4-6");

export const opus = anthropic("claude-opus-4-7");
