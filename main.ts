// One candle brings the teenager back to the table.
import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const candlelitLines = [
  "When the power went out, Grandma lit one candle and Dad made shadow rabbits on the kitchen wall.",
  "My 15-year-old brother, 'too old for that' all year, put his phone face-down and dragged his chair beside Grandma's. Then he asked Dad for a dinosaur. A big one."
];

function leaveNoteOnTable() {
  const tableSpot = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(tableSpot, { recursive: true });
  const notePath = join(tableSpot, "entry.txt");
  writeFileSync(notePath, candlelitLines.join("\n") + "\n", "utf8");
  chmodSync(notePath, 0o644);
}

leaveNoteOnTable();
