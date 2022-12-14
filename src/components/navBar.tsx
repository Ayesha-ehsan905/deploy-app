import { styled } from "../theming/darkTheme";

export const Navbar = styled("nav", {
  //utlis
  variants: {
    navbar_Style: {
      main_navbar: {
        height: "80px",
        linearGradient:
          " 90.18deg, rgba(50, 56, 91, 0.57) 0%, rgba(26, 31, 65, 0.57) 100%",
        br: "0px 0px 15px 15px",
        display: "flex",
        justifyContent: "end",
      },

      mobile_navebar: {
        zIndex: "1",
        position: "fixed",
        width: "294px",
        height: "100%",
        left: "0px",
        top: "0px",
        linearGradient: " 90.18deg, #32385B 0%, #1A1F41 100%",
        br: "0px 15px 15px 0px",
        backdropFilter: "blur(20px)",
      },
    },
  },
});
