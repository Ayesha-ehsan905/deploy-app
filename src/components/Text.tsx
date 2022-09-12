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
    },
    align: {
      center: {
        mt: "31px",
        ml: "40px",

        "@bp3": {
          ft: "14px",
          ml: "20px",
        },
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
