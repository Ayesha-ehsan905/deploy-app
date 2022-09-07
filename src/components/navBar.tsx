import React from "react";
import { styled } from "../theming/darkTheme";

// import { styled } from "@stitches/react";

export const Navbar = styled("nav", {
    //utlis
  linearGradient: " 90.18deg, rgba(50, 56, 91, 0.57) 0%, rgba(26, 31, 65, 0.57) 100%",
  pb: "68px",
  display:'inherit',
  
  color: "$white",
  br: " 0px 0px 15px 15px",
  mr: "60px",
  ml: "60px",

  "@bp1": {
    mr: "30px",
    ml: "30px",
  },
  "@bp2": {
    mr: "60px",
    ml: "60px",
  },
});
