import React from "react";
import { styled } from "../theming/darkTheme";

export const Box = styled("div", {
  // overflowX: "clip",
  // overflowy: "clip",

  variants: {
    //utlis
    postion: {
      right: {
        position: "absolute",
        width: "100%",
        height: "200px",
        left: "0px",
        top: "1200px",
      },
      left: {
        position: "absolute",
        width: "294px",
        height: "40px",
        left: " 0px",
        top: "116px",
        linearGradient:
          " 90deg, rgba(217, 2217, 217, 0.57) 0%, rgba(217, 217, 217, 0) 100%",
      },
    },
  },
});
