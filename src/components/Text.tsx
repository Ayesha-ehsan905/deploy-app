import { styled } from "../theming/darkTheme";

export const Text = styled("p", {
  
  fontFamily: "$sans",
  fs: " normal",
  fontWeight: "$small",
  fontSize: "$3",
  lineHeight: "20px",
  color: "$white",
 
  variants:{
    align:{
      center:{
        mt: '31px',
        ml: '40px',
        "@bp1":{
          ml:'10px',
          ft:'14px',
        }
      },
      left:{
       ml:'20px',

      },
    },

  },
  
  

});
