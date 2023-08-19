/** @type { import('@storybook/react').Preview } */
import { withThemeByClassName } from "@storybook/addon-styling";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";

import { poppins } from "~/lib/fonts";
import "../src/app/globals.css";

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className={poppins.variable}>
        <Story />
      </div>
    ),
    withThemeByClassName({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "dark",
    }),
  ],
};

export default preview;
