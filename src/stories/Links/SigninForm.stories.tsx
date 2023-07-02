import { linkTo, withLinks } from "@storybook/addon-links";
import { SigninForm } from "../../Components";

export default {
  component: SigninForm,
  decorators: [withLinks],
};

export const Base = () => <SigninForm onSubmit={linkTo("Home")} />;
