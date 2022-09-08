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
    bp0: '(max-width: 640px) and (min-width:480px)',
    bp1: '(min-width: 650px) and (max-width:780px)',
    bp2: '(min-width: 768px)',
    bp3: '(min-width: 1024px)',
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
    height:'100%',
  },
  

});

injectGlobalStyles();

export const styled = darktheme.styled;
