import { styled } from "../theming/darkTheme";

export const Button = styled("button", {
  boxSizing: "border-box",
  bg: "#B79313",
  border: "1px solid #FF9E00",
  br: "8px",
  cursor: "pointer",

  variants: {
    style: {
      basestyle: {
        width: "163px",
        height: "40px",
        ml: "20px",
        mr: "30px",
        mt: "20px",
        "&:hover": {
          backgroundColor: "$white",
          border: "1px solid $bg_dark",
        },
      },
      //sidedrawer toggle button
      side_drawer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "24px",
        width: "30px",
        backgroundColor: "transparent",
        border: "none",
        position: "absolute",
        left: "10px",
        top: "20px",
        mr: "20px",
        ml: "px",
        mt: "3px",
        "@bp1": {
          display: "none",
        },
        "@bp0": {
          ml: "60px",
        },
      },
      basetyle_connect: {
        width: "163px",
        height: "50px",
        ml: "20px",
        mr: "30px",
        mt: "54px",
        br: "0px",
        "&:hover": {
          backgroundColor: "$white",
          border: " solid $bg_dark",
        },
        "@bp0": {
          ml: "40px",
          mr: "40px",
          width: "80%",
          mt: "10px",
        },
      },
    },
  },
});
