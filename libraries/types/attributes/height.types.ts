import type {
  NumericType,
  DecimalType,
  PercentageHalvesType,
  PercentageThirdsType,
  PercentageFourthsType,
  PercentageFifthsType,
  PercentageSixtsType,
} from "../attributes/attribute.types";

export type HeightType =
  | "auto"
  | "px"
  | "screen"
  | "full"
  | "min"
  | "max"
  | "fit"
  | "lvh"
  | "dvh"
  | "svh";

export type HeightPercentageType = PercentageHalvesType | PercentageThirdsType | PercentageFourthsType | PercentageFifthsType | PercentageSixtsType ;

export type HeightPropertyType =
  | NumericType
  | DecimalType
  | HeightPercentageType
  | HeightType;

export type HeightMinPropertyType =
  | "min-h-0"
  | "min-h-full"
  | "min-h-screen"
  | "min-h-min"
  | "min-h-max"
  | "min-h-fit";

export type HeightMaxPropertyType = NumericType | DecimalType | HeightType;
export interface AllHeights {
  value?: HeightPropertyType;
  min?: HeightMinPropertyType;
  max?: HeightMaxPropertyType;
}
