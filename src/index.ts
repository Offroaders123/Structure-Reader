import { readFile } from "node:fs/promises";
import { parse } from "nbtify";

import type { Structure, BlockState } from "./structure.js";

const demo = new URL("../test/twofourthree.snbt",import.meta.url);

const buffer = await readFile(demo,"utf-8");
console.log(buffer);

const data = parse<Structure>(buffer);
console.log(data);

const blockMap: BlockState[] = data.structure.block_indices[0]
  .map(index =>
    data.structure.palette.default.block_palette[index.valueOf()]!
  );
console.log(blockMap);