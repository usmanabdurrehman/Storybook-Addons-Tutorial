import { linkTo, withLinks } from "@storybook/addon-links";
import { Home } from "../../Components";

export default {
  title: "Home",
};

export const Base = () => <Home onLogout={linkTo("SigninForm")} />;
