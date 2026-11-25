import { join } from "node:path";
import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
// One candle and shadow rabbits draw the 15-year-old back in; the two-line break lets his dinosaur request land.
const scene = "When the power went out, Grandma lit one candle and Dad made shadow rabbits on the kitchen wall.\nMy 15-year-old brother, 'too old for that' all year, put his phone face-down and dragged his chair beside Grandma's. Then he asked Dad for a dinosaur — a big one.";
const destinationFolder = process.env.MAKEFUN_OUTPUT_DIR ? process.env.MAKEFUN_OUTPUT_DIR : "/output";
mkdirSync(destinationFolder, { recursive: true });
const targetPath = join(destinationFolder, "entry.txt");
writeFileSync(targetPath, scene + "\n", "utf8");
chmodSync(targetPath, 0o644);
