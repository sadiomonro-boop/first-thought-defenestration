// One Word, First Thought — make.fun entry.
// The program writes exactly one word, the first that comes to mind,
// to /output/entry.txt. No topic, no explanation, no second draft.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The first word that comes to mind: the act of throwing someone
// out of a window. Surprising, vivid, and funny on a second look.
const WORD = "defenestration";

// Defensive validation, mirroring the sealed scorer's gate:
// UTF-8 text, 1-24 characters, exactly one word, not only whitespace.
const chars = [...WORD];
if (chars.length < 1 || chars.length > 24) {
  throw new Error(`word must be 1-24 characters, got ${chars.length}`);
}
if (/\s/.test(WORD)) {
  throw new Error("word must contain no whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
