import { Button, ButtonGroup } from "@chakra-ui/react";
import { linkTo, withLinks } from "@storybook/addon-links";
import { Home } from "../../Components/Home";

export default {
  component: Home,
  decorators: [withLinks],
};

const getStoryName = (e: any) => {
  return e.currentTarget?.textContent;
};

export const Base = () => (
  <ButtonGroup gap={4}>
    <Button
      bg="red"
      color="white"
      onClick={linkTo("NormalButton", getStoryName)}
    >
      Red
    </Button>
    <Button
      bg="green"
      color="white"
      onClick={linkTo("NormalButton", getStoryName)}
    >
      Green
    </Button>
    <Button
      bg="blue"
      color="white"
      onClick={linkTo("NormalButton", getStoryName)}
    >
      Blue
    </Button>
  </ButtonGroup>
);

export const Red = () => (
  <Button
    bg="red"
    color="white"
    data-sb-kind="NormalButton"
    data-sb-story="Blue"
  >
    Red
  </Button>
);
export const Green = () => (
  <Button bg="green" color="white" onClick={linkTo("Home")}>
    Green
  </Button>
);
export const Blue = () => (
  <Button bg="blue" color="white" onClick={linkTo("Home")}>
    Blue
  </Button>
);
