import React, { useEffect } from "react";
import { useChannel } from "@storybook/preview-api";
import { HIGHLIGHT, RESET_HIGHLIGHT } from "@storybook/addon-highlight";
import { Button } from "@chakra-ui/react";

export default { component: Button };

export const HighlightedButton = () => {
  const emit = useChannel({});

  useEffect(() => {
    emit(HIGHLIGHT, {
      elements: [".button"],
      color: "blue",
      style: "dotted",
    });
  }, [emit]);

  return <Button className="button">Click Me</Button>;
};
