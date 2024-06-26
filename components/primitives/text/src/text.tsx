import React, { FC } from "react";
import { TextProperties } from "./text.types.js";
import {
  getClassNames,
  getTextColorAttribute,
  getBackgroundColorAttribute,
  getProperties,
} from "@phoenix-ui/attribute-utils";

const Text: FC<TextProperties> = (properties) => {
  const TagType = properties.tag || "span";

  const className = getClassNames(
    properties.colors?.text && getTextColorAttribute(properties.colors.text),
    properties.colors?.background &&
      getBackgroundColorAttribute(properties.colors.background),
    properties.opacity,
    properties.align,
    properties.display,
    properties.weight,
    properties.overflow &&
      properties.display === "block" &&
      properties.overflow,
    properties.className,
  );

  return (
    <TagType {...getProperties({ ...properties, className })}>
      {properties.children}
    </TagType>
  );
};

Text.displayName = "Text";

export { Text };
