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
    fontFamily: {
      ...commonTheme.theme.fonts,
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
    bp0: " (max-width:700px)",
    bp1: "(min-width: 701px) ",
    // bp1: "(min-width: 661px) ",
    bp2: "(max-width:840px) ",
    bp3: "(min-width:701px) and (max-width:840px)",
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
