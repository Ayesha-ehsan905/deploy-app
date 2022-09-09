import React from "react";
import { styled } from "../theming/darkTheme";
import SideDrawer from "./sideDrawer/sideDrawer";

export const Span = styled("span", {
  variants: {
    //for lines for tooglebutton of mobile drawer
    tooglebtn_lines:{
      line:{
        mt:'5px',
        border: '1px solid #FFFFFF',
        width:'20px',
      
        
      }
    },
    //sidemenulines
    SideDrawer:{
        line:{
            position: 'absolute',
            width: '293px',
            height: '0px',
            left: '0px',
            top: '116px',
            opacity: '0.25',
            border: '1px solid #FFFFFF',
            transform: 'rotate(180deg)',
        }
    },
  },
});
