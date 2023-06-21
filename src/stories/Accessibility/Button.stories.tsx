import { Button, ButtonGroup } from "@chakra-ui/react";
import { linkTo, withLinks } from "@storybook/addon-links";

export default {
  title: "Button",
};

export const ButtonBase = () => (
  <Button bg="green" color="white">
    Red
  </Button>
);
