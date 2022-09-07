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
  },
  media: {
    bp1: "(min-width: 640px)",
    bp2: "(min-width: 768px)",
    bp3: "(min-width: 1024px)",
  },
  utils: {
    ...commonTheme.utils,
  },
});

const injectGlobalStyles = darktheme.globalCss({
  body: {
    margin: 0,
    padding: 0,
    backgroundColor: "$bg_dark_div",
  },
  nav: {
    //  display: "flex",
    // flexDirection: "row",
    // justifyContent: "space-between",
    // alignItems: "center",
  },
});

injectGlobalStyles();

export const styled = darktheme.styled;
