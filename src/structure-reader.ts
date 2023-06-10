import { readFile } from "node:fs/promises";
import * as NBT from "nbtify";

import type { MCStructure } from "./MCStructure.d.ts";

const STRUCTURE = new URL("../test/uncompressed.mcstructure",import.meta.url);
const STRUCTURE_GZIP = new URL("../test/gzip.mcstructure",import.meta.url);
const STRUCTURE_DEFLATE = new URL("../test/zlib.mcstructure",import.meta.url);

const [data,dataGzip,dataDeflate] = await Promise.all([
  readFile(STRUCTURE),
  readFile(STRUCTURE_GZIP),
  readFile(STRUCTURE_DEFLATE)
]);

const [structure,structureGzip,structureDeflate] = await Promise.all([
  NBT.read<MCStructure>(data),
  NBT.read<MCStructure>(dataGzip),
  NBT.read<MCStructure>(dataDeflate)
]);

// const definition = NBT.definition(structure,{ name: "MCStructure" });
// console.log(definition);

console.log(structure,"\n");
console.log(structureGzip,"\n");
console.log(structureDeflate,"\n");

console.log(structure.data.structure.entities.map(entity => entity.identifier));