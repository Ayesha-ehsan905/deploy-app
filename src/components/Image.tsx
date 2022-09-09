import { styled } from "../theming/darkTheme";

export const Image = styled("img", {
  variants: {
    size: {
      sm: {
        position: "absolute",
        left: "30px",
        top: "23px",
        ml: "20px",
        // "@bp1":{
        //   width:'120px',
        //   top:'30px',
        //   // ml:'15px',
        //   left:'20px',
        // }
      },
    },
  },
});
