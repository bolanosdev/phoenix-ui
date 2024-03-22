import { RoundingType } from "packages/phoenix/libraries/types/attributes";
import { SectionProperties } from "@phoenix-ui/types/components";
type SectionTagType = "div" | "pre" | "code";

export interface SectionExtendedProperties extends SectionProperties {
  dangerouslySetInnerHTML?: { __html: string };
  tag?: SectionTagType;
  rounded?: RoundingType;
}
