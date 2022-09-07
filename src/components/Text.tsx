import { styled } from "../theming/darkTheme";

export const Text = styled("p", {

  variants: {
    size: {
      sm: {
        fontFamily: "$sans",
        fs: "normal",
        fontWeight: "$semiBold",
        fontSize: "$3",
        color: "$white",
        ml: "30px",
        // color: "#fff",
        
      },

      md: {},
      lg: {},
    },
  },
});