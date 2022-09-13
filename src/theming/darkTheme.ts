import { createStitches } from "@stitches/react";
// import defaultColors from "./colors";
import commonTheme from "./defaultTokens";

const darktheme = createStitches({
  ...commonTheme,
  theme: {
    ...commonTheme.theme,
    colors: {
      ...commonTheme.theme.colors,
    },
    fontSizes: {
      ...commonTheme.theme.fontSizes,
    },
    fontWeights: {
      ...commonTheme.theme.fontWeight,
    },
    display: {
      ...commonTheme.theme.display,
    },
    keyframes: {
      ...commonTheme.keyframes,
    },
  },
  media: {
    bp0: " (max-width:660px)",
    bp1: "(min-width: 661px) ",
    bp2: "",
    bp3: "",
    bp4: "",
    bp5: "",
    // bp6: "(min-width:1080)",
  },
  utils: {
    ...commonTheme.utils,
  },
});

const injectGlobalStyles = darktheme.globalCss({
  html: {
    margin: 0,
    padding: 0,
    // backgroundColor: "$bg_dark_div",
    height: "100%",
  },
  body: {
    margin: 0,
    padding: 0,
    backgroundColor: "$bg_dark_div",
    height: "100%",
    width: "100%",
  },
  a: {
    textDecoration: "none",
    color: "$white",
  },
  p: {
    fontFamily: "Inter",
  },
});

injectGlobalStyles();

export const styled = darktheme.styled;
