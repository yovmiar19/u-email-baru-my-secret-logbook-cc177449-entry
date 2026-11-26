// My Secret Logbook — make.fun one-liner entry (Opus rebuild).
// The program writes exactly one diary line to /output/entry.txt.
// The line is written verbatim: no trailing newline, no extra text.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Day 88: He asked me for a healthy dinner recipe and ordered martabak while I was still typing. I listed the ingredients for no one.";

// Gate: one line, 1-200 chars (bounty rule).
if (line.length < 1 || line.length > 200 || line.includes("\n")) {
  throw new Error(`line fails gate: ${line.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`wrote ${line.length} chars to /output/entry.txt`);
