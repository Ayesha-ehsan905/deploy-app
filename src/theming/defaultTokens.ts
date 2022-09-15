import defaultColors from "./colors";
import defaultUtlis from "./defaultUtlis";
import animations from "./keyFrames";

const defaultTokens = {
  fonts: {
    sans: "Space Grotesk",
    inter: "Inter",
    mono: "Menlo, Monaco, 'Lucida Console', 'Courier New', monospace;",
    LexendDeca: "Lexend Deca",
  },
  fontSizes: {
    1: "13px",
    2: "15px",
    3: "16px",
    4: "17px",
    5: "30px",
  },

  fontWeight: {
    small: "400",
    medium: "500",
    semiBold: "600",
    Bold: "700",
    extraBold: "800",
  },
  space: {
    0: "0rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.37rem",
    xl: "2.25rem",
  },
  display: {
    1: "flex",
    2: "inline",
    3: "block",
    4: "inline-block",
  },
};

const commonTheme = {
  theme: {
    ...defaultTokens,
    colors: defaultColors,
    // fontSizes:defaultTokens.fontSizes,
  },
  utils: defaultUtlis,
  keyframes: animations,
};

export default commonTheme;
