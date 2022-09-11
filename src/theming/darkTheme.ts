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
    // bp0: "(max-width: 660px) and (min-width:480px)",
    bp0: " (max-width:659px)",
    bp1: "(min-width: 660px)",
    bp2: "(min-width: 661px) and (max-width:800px)",
    // bp3: "(min-width: 801px) and (max-width:1000px)",
    bp3: "(min-width:801px) and (max-width:900px)",
    bp4: "(min-width:901px)and (max-width:970px)",
    bp5: "(min-width: 970px) and (max-width:1070px)",
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
});

injectGlobalStyles();

export const styled = darktheme.styled;
