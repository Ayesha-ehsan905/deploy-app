import React from "react";
import { styled } from "../theming/darkTheme";

export const Box = styled("div", {
    
  variants: {
    //utlis
    postion: {
      right: {
        position: "relative",
        float: "right",
        left: "700px",
        top: "-44px",
        display:'flex',
      },
    },
  },
});
