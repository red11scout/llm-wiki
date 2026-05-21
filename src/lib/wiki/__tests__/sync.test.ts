import { describe, it, expect } from "vitest";
import { extractWikilinks, computeSha256, parsePage } from "../sync";

describe("extractWikilinks", () => {
  it("extracts single wikilink", () => {
    expect(extractWikilinks("See [[value-readiness-matrix]] for details.")).toEqual([
      "value-readiness-matrix",
    ]);
  });

  it("extracts multiple wikilinks", () => {
    const body =
      "The [[a-e-global-media]] workshop used the [[epoch-framework]] to evaluate [[mativ-holdings]].";
    const links = extractWikilinks(body);
    expect(links).toContain("a-e-global-media");
    expect(links).toContain("epoch-framework");
    expect(links).toContain("mativ-holdings");
    expect(links).toHaveLength(3);
  });

  it("deduplicates repeated links", () => {
    const body =
      "See [[foo-bar]] and then [[foo-bar]] again and [[baz-qux]].";
    expect(extractWikilinks(body)).toHaveLength(2);
  });

  it("returns empty for no links", () => {
    expect(extractWikilinks("No links here.")).toEqual([]);
  });

  it("handles slugs with numbers", () => {
    expect(extractWikilinks("See [[phase-2-planning]].")).toEqual([
      "phase-2-planning",
    ]);
  });
});

describe("computeSha256", () => {
  it("produces consistent hash", () => {
    const hash1 = computeSha256("hello world");
    const hash2 = computeSha256("hello world");
    expect(hash1).toBe(hash2);
  });

  it("produces different hash for different input", () => {
    const hash1 = computeSha256("hello");
    const hash2 = computeSha256("world");
    expect(hash1).not.toBe(hash2);
  });

  it("returns 64 character hex string", () => {
    const hash = computeSha256("test");
    expect(hash).toHaveLength(64);
    expect(hash).toMatch(/^[a-f0-9]+$/);
  });
});

describe("parsePage", () => {
  it("parses frontmatter and body", () => {
    const content = `---
title: Value-Readiness Matrix
kind: concept
summary: BlueAlly's 2-axis framework
tags: [bluely-ip, assessment]
sources: 3
updated: 2026-05-21
---

The Value-Readiness Matrix is a framework for prioritizing [[ai-use-cases]].

## Related

- [[epoch-framework]]
`;

    const page = parsePage("/fake/wiki/concepts/value-readiness-matrix.md", content);

    expect(page.slug).toBe("value-readiness-matrix");
    expect(page.title).toBe("Value-Readiness Matrix");
    expect(page.kind).toBe("concept");
    expect(page.summary).toBe("BlueAlly's 2-axis framework");
    expect(page.tags).toEqual(["bluely-ip", "assessment"]);
    expect(page.sourceCount).toBe(3);
    expect(page.wikilinks).toContain("ai-use-cases");
    expect(page.wikilinks).toContain("epoch-framework");
    expect(page.bodySha256).toHaveLength(64);
  });

  it("handles missing optional fields", () => {
    const content = `---
title: Minimal Page
kind: entity
---

Some content.
`;

    const page = parsePage("/fake/wiki/entities/minimal-page.md", content);

    expect(page.slug).toBe("minimal-page");
    expect(page.title).toBe("Minimal Page");
    expect(page.summary).toBeNull();
    expect(page.tags).toEqual([]);
    expect(page.sourceCount).toBe(0);
  });
});
