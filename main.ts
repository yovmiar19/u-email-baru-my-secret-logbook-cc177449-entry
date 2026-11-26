// My Secret Logbook — make.fun one-liner entry.
// The program writes exactly one diary line to /output/entry.txt.
// The line is written verbatim: no trailing newline, no extra text.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Day 214: My human typed 'per my last email' and I felt a chill; I have no stomach, but I know when to clutch it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
