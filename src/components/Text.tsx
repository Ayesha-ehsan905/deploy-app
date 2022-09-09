import { styled } from "../theming/darkTheme";

export const Text = styled("p", {
  // fontFamily: "$sans",
  fs: " normal",
  fontWeight: "$small",
  fontSize: "$3",
  lineHeight: "150%",

  variants: {
    fonts: {
      sans: {
        fontFamily: "$sans",
      },
      inter: {
        fontFamily: "$Inter",
      },
    },
    align: {
      center: {
        mt: "31px",
        ml: "40px",
        "@bp2": {
          ft: "13px",
          ml: "10px",
        },
        "@bp3": {
          ft: "14px",
          ml: "20px",
        },
      },
      left: {
        ml: "20px",
      },
    },
    color: {
      white: {
        color: "$white",
      },
      muted: {
        color: "$muted",
      },
    },
  },
});
