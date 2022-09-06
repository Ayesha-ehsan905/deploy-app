import defaultColors from "./colors";
import defaultUtlis from "./defaultUtlis";

const defaultTokens = {
  fontSizes: {
    1: "13px",
    2: "15px",
    3: "17px",
    4: "30px",
  },

  fontWeight: {
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
};

const commonTheme = {
  theme: {
    ...defaultTokens,
    colors: defaultColors,
    // fontSizes:defaultTokens.fontSizes,
  },
  utils: defaultUtlis,
};

export default commonTheme;
