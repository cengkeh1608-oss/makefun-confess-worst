import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  'I auto-replied "sounds good" to a resignation letter. It was mine.';

// The gate refuses anything outside 1-200 characters, so fail loudly here
// instead of shipping an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} characters, must be 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
