import {createStitches } from "@stitches/react";
// import defaultColors from "./colors";
import commonTheme from "./defaultTokens";

const darktheme =createStitches({
   ...commonTheme,
   theme:{
   ...commonTheme.theme,
   colors:{
      ...commonTheme.theme.colors,
   },
   fontSizes :{
      ...commonTheme.theme.fontSizes,
   }
  },
   utils:{
    ...commonTheme.utils
   }
});

export const styled = darktheme.styled
