import { styled } from "../theming/darkTheme";

export const Navbar = styled("nav", {
  //utlis
  variants: {
    navbar_Style: {
      main_navbar: {
        // position: "absolute",
        // width: "95%",
        // top: " 0px",
        height: "80px",
        linearGradient:" 90.18deg, rgba(50, 56, 91, 0.57) 0%, rgba(26, 31, 65, 0.57) 100%",
        br: "0px 0px 15px 15px",
        display: "flex",
        justifyContent: "end",
        mr: "30px",
        ml: "30px",
        "@bp1":{
          // width:'100%',
          left:'0px',
          mr:'30px',
          ml:'30px',
        },
        
      },

      mobile_navebar: {
        position: "fixed",
        width: "294px",
        height: "100%",
        left: "0px",
        top: "0px",
        linearGradient:
          " 90.18deg, #32385B 0%, #1A1F41 100%",
        br: "0px 15px 15px 0px",
        // background: linear-gradient(90.18deg, #32385B 0%, #1A1F41 100%);
        backdropFilter: "blur(20px)",
      },
    },
  },
});
