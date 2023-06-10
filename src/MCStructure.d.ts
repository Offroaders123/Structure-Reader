import { BooleanTag, ByteTag, ShortTag, IntTag, LongTag, FloatTag, StringTag } from "nbtify";

// Use of unknown types are simply because I didn't dive deeper into finding the real types for that given feature.

export interface MCStructure {
  format_version: IntTag;
  size: [IntTag, IntTag, IntTag];
  structure: {
    block_indices: [IntTag[],IntTag[]];
    entities: Entity[];
    palette: {
      default: {
        block_palette: BlockState[];
        block_position_data: BlockPosition;
      };
    };
  };
  structure_world_origin: [IntTag, IntTag, IntTag];
}

export interface Entity {
  Air: ShortTag;
  Armor: Item[];
  AttackTime: ShortTag;
  Attributes: Attribute[];
  BodyRot: FloatTag;
  BreedCooldown: IntTag;
  Chested: BooleanTag;
  Color: ByteTag;
  Color2: ByteTag;
  Dead: BooleanTag;
  DeathTime: ShortTag;
  FallDistance: FloatTag;
  Fire: ShortTag;
  HurtTime: ShortTag;
  InLove: IntTag;
  Invulnerable: BooleanTag;
  IsAngry: BooleanTag;
  IsAutonomous: BooleanTag;
  IsBaby: BooleanTag;
  IsEating: BooleanTag;
  IsGliding: BooleanTag;
  IsGlobal: BooleanTag;
  IsIllagerCaptain: BooleanTag;
  IsOrphaned: BooleanTag;
  IsOutOfControl: BooleanTag;
  IsPregnant: BooleanTag;
  IsRoaring: BooleanTag;
  IsScared: BooleanTag;
  IsStunned: BooleanTag;
  IsSwimming: BooleanTag;
  IsTamed: BooleanTag;
  IsTrusting: BooleanTag;
  LastDimensionId: IntTag;
  LeasherID: LongTag;
  LootDropped: BooleanTag;
  LoveCause: LongTag;
  Mainhand: Item[];
  MarkVariant: IntTag;
  NaturalSpawn: BooleanTag;
  Offhand: Item[];
  OnGround: BooleanTag;
  OwnerNew: LongTag;
  PortalCooldown: IntTag;
  Pos: [FloatTag, FloatTag, FloatTag];
  Rotation: [FloatTag, FloatTag];
  Saddled: BooleanTag;
  Sheared: BooleanTag;
  ShowBottom: BooleanTag;
  Sitting: BooleanTag;
  SkinID: IntTag;
  Strength: IntTag;
  StrengthMax: IntTag;
  Surface: BooleanTag;
  Tags: [];
  TargetID: LongTag;
  TradeExperience: IntTag;
  TradeTier: IntTag;
  UniqueID: LongTag;
  Variant: IntTag;
  boundX: IntTag;
  boundY: IntTag;
  boundZ: IntTag;
  canPickupItems: BooleanTag;
  definitions: [StringTag, StringTag, StringTag];
  hasBoundOrigin: BooleanTag;
  hasSetCanPickupItems: BooleanTag;
  identifier: StringTag;
  limitedLife: IntTag;
}

export interface Item {
  Count: ByteTag;
  Damage: ShortTag;
  Name: StringTag;
  WasPickedUp: BooleanTag;
}

export interface Attribute {
  Base: FloatTag;
  Current: FloatTag;
  DefaultMax: FloatTag;
  DefaultMin: FloatTag;
  Max: FloatTag;
  Min: FloatTag;
  Name: StringTag;
}

export interface BlockState {
  name: StringTag;
  states: Record<string,unknown>;
  version: IntTag;
}

export interface BlockPosition extends Record<string,unknown> {}