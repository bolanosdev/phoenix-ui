import type { FlexType, RoundingType } from "@phoenix-ui/types/attributes";
import type { BaseAttributes, BaseProperties } from "./base.types";
import type { ResponsiveSectionOverrides } from "@phoenix-ui/types/utilities";

export interface SectionAttributes extends BaseAttributes {}

export interface SectionProperties extends BaseProperties {
  flex?: FlexType;
  rounding?: RoundingType;
  overrides?: ResponsiveSectionOverrides;
}
