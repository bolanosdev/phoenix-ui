import { describe, test, expect, mock } from "bun:test";
import { render, fireEvent } from "@testing-library/react";

import { Button } from "./button";
import { ColorStubs } from "@phoenix-ui/attribute-utils/stubs";
import { type ButtonProperties } from "./button.types";

describe("Button", () => {
  test.only(":default", () => {
    const button = <Button>Hello World</Button>;
    const { container } = render(button);
    expect(container.querySelector("button")?.className).toEqual(
      "button medium text-white bg-blue-500",
    );
  });

  test(":action", () => {
    const props: ButtonProperties = {
      children: "Hello World",
      action: "primary",
    };
    const button = <Button {...props} />;
    const { container } = render(button);
    expect(container.querySelector("button")?.className).toEqual(
      "button medium text-white bg-blue-500",
    );
  });

  test(":size", () => {
    const props: ButtonProperties = {
      children: "Hello World",
      scale: "large",
    };
    const button = <Button {...props} />;
    const { container } = render(button);
    expect(container.querySelector("button")?.className).toEqual(
      "button large text-white bg-blue-500",
    );
  });

  test(":rounded", () => {
    const props: ButtonProperties = {
      children: "Hello World",
      rounded: "rounded-lg",
    };
    const button = <Button {...props} />;
    const { container } = render(button);
    expect(container.querySelector("button")?.className).toEqual(
      "button medium rounded-lg text-white bg-blue-500",
    );
  });

  test(":isFullWidth", () => {
    const props: ButtonProperties = {
      children: "Hello World",
      isFullWidth: true,
    };
    const button = <Button {...props} />;
    const { container } = render(button);
    expect(container.querySelector("button")?.className).toEqual(
      "button medium text-white bg-blue-500 w-full",
    );
  });

  test(":onClickEvent", () => {
    const onClickSpy = mock();
    const testId = "test-button";
    const props: ButtonProperties = {
      children: "Hello World",
      onClick: onClickSpy,
      dataTestId: testId,
    };

    const { getByTestId } = render(<Button {...props} />);
    const button = getByTestId(testId);
    fireEvent.click(button);
    expect(onClickSpy).toHaveBeenCalled();
  });

  test(":disable", () => {
    const props: ButtonProperties = {
      children: "Hello World",
      disabled: true,
    };
    const { container } = render(<Button {...props} />);

    expect(container.querySelector("button")?.hasAttribute("disabled")).toBe(
      true,
    );
  });

  test(":colors", () => {
    const props: ButtonProperties = {
      children: "Hello World",
      ...ColorStubs,
    };

    const button = <Button {...props} />;
    const { container } = render(button);
    const result = container.querySelector("button")?.className;

    expect(result).toContain(`${ColorStubs.colors.text.color}-400`);
    expect(result).toContain(`${ColorStubs.colors.background.color}-400`);
    expect(result).toContain(`dark:${ColorStubs.dark.colors.text.color}-400`);
    expect(result).toContain(`dark:${ColorStubs.dark.colors.text.color}-400`);

    expect(result).toContain(
      `md:${ColorStubs.overrides.medium.colors.text.color}-400`,
    );
    expect(result).toContain(
      `md:${ColorStubs.overrides.medium.colors.background.color}-400`,
    );
    expect(result).toContain(
      `md:dark:${ColorStubs.overrides.medium.dark.colors.text.color}-400`,
    );
    expect(result).toContain(
      `md:dark:${ColorStubs.overrides.medium.dark.colors.background.color}-400`,
    );

    expect(result).toContain(
      `lg:${ColorStubs.overrides.large.colors.text.color}-400`,
    );
    expect(result).toContain(
      `lg:${ColorStubs.overrides.large.colors.background.color}-400`,
    );
    expect(result).toContain(
      `lg:dark:${ColorStubs.overrides.large.dark.colors.text.color}-400`,
    );
    expect(result).toContain(
      `lg:dark:${ColorStubs.overrides.large.dark.colors.background.color}-400`,
    );
  });
});
