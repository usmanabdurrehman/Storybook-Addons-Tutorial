import { linkTo, withLinks } from "@storybook/addon-links";
import { Home } from "../../Components";

export default {
  component: Home,
};

export const Base = () => <Home onLogout={linkTo("SigninForm")} />;
