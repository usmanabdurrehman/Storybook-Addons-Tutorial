import { Button } from "@chakra-ui/react";
export default {
  component: Button,
};

/*
Figma: https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F
Link: https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample
Image: https://material.angular.io/assets/screenshots/button.scene.png
IFrame: https://chakra-ui.com/docs/components/button/usage
*/

export const ButtonBase = {
  args: {
    colorScheme: "whatsapp",
    children: "Sign up",
  },
  parameters: {
    design: [
      {
        type: "figma",
        url: "https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F",
      },
      {
        type: "link",
        url: "https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample",
        label: "Button Design",
      },
      {
        type: "image",
        url: "https://material.angular.io/assets/screenshots/button.scene.png",
      },
      {
        type: "iframe",
        url: "https://chakra-ui.com/docs/components/button/usage",
      },
    ],
  },
};
