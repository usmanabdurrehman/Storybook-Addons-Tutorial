import React, { useEffect } from "react";
import { useChannel } from "@storybook/preview-api";
import { HIGHLIGHT, RESET_HIGHLIGHT } from "@storybook/addon-highlight";
import { SigninForm } from "../../Components";

export default { component: SigninForm };

export const HighlightedSigninForm = () => {
  const emit = useChannel({});

  useEffect(() => {
    emit(HIGHLIGHT, {
      elements: [".email", ".password", ".signin"],
      color: "blue",
      style: "dotted",
    });
  }, [emit]);

  return <SigninForm onSubmit={() => {}} />;
};
