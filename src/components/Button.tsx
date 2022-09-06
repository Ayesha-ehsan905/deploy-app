import { styled } from "../theming/darkTheme";

export const Button = styled("button", {
  
  color: "$primary",
  backgroundColor: "$bg_white",
  borderRadius: "8px",
  border: "3px solid #aba0a0",
  pt: "4px ",
  pb: "4px",
  fontSize: "$medium",
  fontWeight: "$medium",
  cursor: "pointer",
  textAlign: "left",
  transition: "borderColor 0.25s",
  float:"right",
  ml:"5px",
  '&:hover': {
    borderColor: 'black',
  },

});
