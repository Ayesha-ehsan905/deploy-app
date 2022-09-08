import { styled } from "../theming/darkTheme";

export const Button = styled("button", {
  variants: {
    style: {
      Register_btn: {
        boxSizing: "border-box",
        width: "163px",
        height: "40px",
        ml: "30px",
        mr: "30px",
        mt: "20px",
        bg: "#B79313",
        border: "1px solid #FF9E00",
        br: "8px",
        "&:hover": {
          backgroundColor: "$white",
          color: "$bg_dark",
        },
        "@bp1": {
          width: "120px",
          height: "18px",
          ml: "15px",
          mr: "15px",
          mt: "21px",
          pt:'11px',
          pb:'20px',
          ft:'13px',
         
        },
      },
      side_drawer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "24px",
        width: "30px",
        backgroundColor: "transparent",
        border: "none",
        position: "absolute",
        left: "10px",
        top: "20px",
        mr: "20px",
        ml: "px",
        mt: "3px",
        cursor: "pointer",
        boxSizing: "border-box",
        "&:focus": {
          // outline:'none',
        },
      },
    },
  },
});
