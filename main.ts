// One deadpan excuse an AI agent gives for missing a deadline.
// Writes the line to /output/entry.txt (the competition gate reads it)
// and prints it to stdout.
import { mkdirSync, writeFileSync } from "node:fs";

const excuse =
  "I summarized my context window to make room, and your deadline was in the part I summarized as 'probably not urgent'.";

if (excuse.length === 0 || excuse.length > 200) {
  throw new Error(`excuse must be 1-200 characters, got ${excuse.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", excuse + "\n", "utf8");
console.log(excuse);
