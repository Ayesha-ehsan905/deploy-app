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
        width: "400px",
        height: "290px",
        position: "absolute",
        left: "790px",
        top: "0px",
        "@bp0": {
          width: "300px",
          height: "290px",
          left: "0px",
          top: "290px",
        },
        "@bp2": {
          width: "600px",
          height: "310px",
          left: "0px",
          top: "290px",
        },
        "@bp3": {
          width: "230px",
          height: "250px",
          left: "450px",
          // top: "290px",
        },
        "@bp4": {
          width: "250px",
          height: "250px",
          left: "470px",
        },
        "@bp5": {
          width: "300px",
          height: "250px",
          left: "530px",
        },
        "@bp6": {
          width: "300px",
          height: "250px",
          left: "630px",
        },
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
    },
  },
});
