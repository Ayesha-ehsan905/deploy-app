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
      center: {
        boxSizing: "border-box",

        position: "absolute",
        width: "628px",
        height: "197px",
        left: "77px",
        top: "1000px",

        linearGradient:
          " 153.32deg, rgba(255, 255, 255, 0.3) -65.62%, rgba(255, 255, 255, 0.1) 83.28%",
        boxShadow: "0px 4px 24px -1px rgba(0, 0, 0, 0.2)",
        br: "12px",
      },
    },
  },
});
