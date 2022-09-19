import { styled } from "../theming/darkTheme";

export const Image = styled("img", {
  variants: {
    size: {
      sm: {
        ml: "20px",
        my: "20px",
        "@bp0": {
          // display: "none",
          mt: "20px",
          ml: "60px",
          mb: "0px",
          width: "35%",
          height: "31px",
        },
      },
      medium: {
        width: "80%",
      },

      xs: {
        width: "43%",
        ml: "60px",
        pt: "11px",
        "@bp0": {
          mt: "70px",
        },
      },
      xss: {
        width: "30%",
        ml: "60px",
        mt: "30px",
      },
    },
  },
});
