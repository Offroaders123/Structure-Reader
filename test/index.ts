import { readFile } from "node:fs/promises";
import { parse } from "nbtify";
import { createBlockMap } from "../src/structure.js";

import type { Structure, BlockState } from "../src/structure.js";

const demo = new URL("../test/twofourthree.snbt",import.meta.url);

const buffer = await readFile(demo,"utf-8");
console.log(buffer);

const data = parse<Structure>(buffer);
console.log(data);

const blockMap: BlockState[] = createBlockMap(data);
console.log(blockMap);