import { styled } from "../theming/darkTheme";

export const Image = styled("img", {
  position: "absolute",
  variants: {
    size: {
      sm: {
        left: "30px",
        top: "23px",
        ml: "20px",
        "@bp0": {
          // display: "none",
          mt: "0px",
          ml: "70px",
        },
        "@bp2": {
          width: "150px",
          top: "30px",
        },
      },
      medium: {
        width: "500px",
        height: "290px",
        left: "796px",
        top: "145px",
      },
      large: {
        width: "530px",
        height: "390px",
        left: "796px",
        top: "560px",
      },
    },
  },
});
