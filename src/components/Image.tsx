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
      large: {
        width: "430px",
        height: "390px",
        left: "790px",
        top: "-20px",

        "@bp0": {
          top: "1400px",
          // right: "25px",
          width: "300px",
          left: "0px",
          height: "250px",
        },
        "@bp2": {
          top: "480px",
          right: "25px",
          left: "0px",
        },
      },
      xs: {
        width: "43%",
        ml: "60px",
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
