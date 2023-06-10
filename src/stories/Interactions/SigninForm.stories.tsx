import { SigninForm } from "../../Components";
import { expect } from "@storybook/jest";
import { within, userEvent } from "@storybook/testing-library";

import type { Meta, StoryFn } from "@storybook/react";

export default {
  title: "SigninFormTest",
  component: SigninForm,
  argTypes: {
    onSubmit: { action: true },
  },
} as Meta<typeof SigninForm>;

const Template: StoryFn<typeof SigninForm> = (args) => <SigninForm {...args} />;

export const Demo = Template.bind({});

Demo.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  await canvas.getByTestId("email").focus();
  await canvas.getByTestId("email").blur();
  await canvas.findByText("The email is required");
  await canvas.findByText("The password is required");

  await userEvent.type(canvas.getByTestId("password"), "alex", {
    delay: 100,
  });
  await canvas.findByText("The password should have 10 characters");

  await userEvent.type(canvas.getByTestId("email"), "alex@gmail.com", {
    delay: 100,
  });
  await userEvent.type(canvas.getByTestId("password"), "alexRiley@79", {
    delay: 100,
  });
  await userEvent.click(canvas.getByRole("button"));
  await expect(args.onSubmit).toHaveBeenCalled();
};
