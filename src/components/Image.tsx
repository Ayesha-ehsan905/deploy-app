import { styled } from "../theming/darkTheme";

export const Image = styled("img", {
  variants: {
    size: {
      sm: {
        ml: "20px",
        my: "20px",
        width: "auto%",
        height: "35%",
        "@bp0": {
          // display: "none",
          // mt: "20px",
          ml: "90px",
          // mb: "0px",
          width: "auto%",
          height: "35%",
        },
      },
      medium: {
        width: "80%",
      },
      m_sm: {
        ml: "20px",
        my: "26px",
        width: "auto%",
        height: "35%",
        "@bp0": {
          width: "auto%",
          height: "35%",
        },
      },
      xs: {
        width: "43%",
        height: "auto",

        ml: "60px",
        pt: "11px",
        "@bp0": {
          mt: "70px",
        },
      },
      xss: {
        width: "30%",
        height: "auto",
        ml: "60px",
        mt: "30px",
      },
    },
  },
});
