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
        width: "98%",
        padding: "7px 15px",
        height: "56px",
        border: "1px solid #FFF",
        borderRadius: "4px",
        ft: "18px",
        lineHeight: "24px",
        color: "white",
        mt: "5px",
        fontFamily: "Inter",

        "&::placeholder": {
          color: "white",
        },
      },
      md: {
        // linearGradient:
        //   "153.32deg, rgba(255, 255, 255, 0.3) -65.62%, rgba(255, 255, 255, 0.1) 83.28%",

        // backdropFilter: "blur(20px)",
        backgroundColor: "#27293a",
        width: "30%",
        padding: "7px 15px",
        height: "56px",
        border: "1px solid #FFF",
        borderRadius: "4px",
        ft: "18px",
        lineHeight: "24px",
        color: "white",
        mt: "50px",
        fontFamily: "Inter",

        "&::placeholder": {
          color: "white",
        },
        "@bp0": {
          width: "80%",
          ml: "40px",
          mr: "40px",
        },
      },
    },
  },
});
