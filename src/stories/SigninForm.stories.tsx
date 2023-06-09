import { linkTo, withLinks } from "@storybook/addon-links";
import { SigninForm } from "../Components/SigninForm";

export default {
  title: "SigninForm",
  decorators: [withLinks],
};

export const Base = () => <SigninForm onSubmit={linkTo("Home")} />;
