import { linkTo, withLinks } from "@storybook/addon-links";
import Home from "../Components/Home";
import { SigninForm } from "../Components/SigninForm";

export default {
  title: "Home",
};

export const Base = () => <Home onLogout={linkTo("SigninForm")} />;
