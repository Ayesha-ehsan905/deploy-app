import { styled } from "../theming/darkTheme";
export const Input = styled("input", {
  marginBottom: "10px",
  boxSizing: "border-box",
  display: "$1",
  flexDirection: "row",

  alignItems: "center",

  variants: {
    size: {
      sm: {
        backdropFilter: "blur(20px)",
        linearGradient:
          " 90.18deg, rgba(50, 56, 91, 0.57) 0%, rgba(26, 31, 65, 0.57) 100%",
        position: "absolute",
        left: "400px",
        width: "451px",
        top: "500px",
        padding: "7px 15px",
        height: "56px",
        border: "1px solid #FFF",
        borderRadius: "4px",
        ft: "18px",
        lineHeight: "24px",
        color: "white",

        "&::placeholder": {
          color: "white",
        },
      },
      lg: {
        fontSize: "15px",
        height: "35px",
        paddingLeft: "15px",
        paddingRight: "15px",
      },
    },
  },
  "&.icons_class": {
    bg: "transparent",
    color: "$white",
    position: "absolute",
    top: "524px",
    left: "810px",
  },
});
