import React from "react";
import { styled } from "../theming/darkTheme";

export const Box = styled("div", {
  flex: 1,

  variants: {
    //utlis
    style: {
      round: {
        linearGradient:
          " 90deg, rgba(217, 2217, 217, 0.57) 0%, rgba(217, 217, 217, 0) 100%",

        width: "249px",
        height: "39px",
      },
      rounded: {
        boxSizing: "border-box",
        linearGradient:
          "153.32deg, rgba(255, 255, 255, 0.3) -65.62%, rgba(255, 255, 255, 0.1) 83.28%",
        // ml: "30px",
        // mr: "30px",
        boxShadow: "0px 4px 24px -1px rgba(0, 0, 0, 0.2)",
        backdropFilter: "blur(50px)",
        br: "12px",
        // height: "280px",
      },
    },
  },
});
