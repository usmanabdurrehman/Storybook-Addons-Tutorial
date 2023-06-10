import { Button } from "@chakra-ui/react";
import { expect } from "@storybook/jest";
import { within, userEvent } from "@storybook/testing-library";

import type { Meta, StoryFn } from "@storybook/react";

export default {
  title: "ButtonTest",
  component: Button,
  argTypes: {
    onClick: { action: true },
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => (
  <Button data-testid="nice-button" {...args}>
    Nice Button
  </Button>
);

export const Demo = Template.bind({});
Demo.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByTestId("nice-button"));
  await expect(args.onClick).toHaveBeenCalled();
};
