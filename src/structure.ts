import type { BooleanTag, IntTag, StringTag } from "nbtify";

export function createBlockMap(data: Structure): BlockState[] {
  return data.structure.block_indices[0]
    .map(index =>
      data.structure.palette.default.block_palette[index.valueOf()]!
    );
}

// Use of empty types are simply because I didn't dive deeper into finding the real types for that given feature.
// This will be handled in the future by Region-Types

export interface Structure {
  format_version: IntTag;
  size: [IntTag, IntTag, IntTag];
  structure: {
    block_indices: [IntTag[], IntTag[]];
    entities: object[];
    palette: {
      default: {
        block_palette: BlockState[];
        block_position_data: object;
      };
    };
  };
  structure_world_origin: [IntTag, IntTag, IntTag];
}

export interface BlockState {
  name: StringTag;
  states: Record<string, BooleanTag | StringTag>;
  version: IntTag;
}