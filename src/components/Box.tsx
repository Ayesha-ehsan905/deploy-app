import React from "react";
import { styled } from "../theming/darkTheme";

export const Box = styled("div", {
  overflowX: 'hidden', 
  variants: {

    //utlis
    postion: {
      right: {
        position: "relative",
        float: "right",
        left: "700px",
        top: "-44px",
        display: "flex",
      },
      left: {
        position: "absolute",
        width: "294px",
        height: "40px",
        left: " 0px",
        top: "116px",
        linearGradient:' 90deg, rgba(217, 2217, 217, 0.57) 0%, rgba(217, 217, 217, 0) 100%',
      },
    },
  },
});
