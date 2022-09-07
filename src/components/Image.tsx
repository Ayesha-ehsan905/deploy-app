
import { styled } from "../theming/darkTheme";

export const Image = styled("img", {
    display: "$4",
    mb: "10px",
    // base styles
    variants: {
      size: {
        sm: {
          width: "25px",
          height: "25px",
        },
        lg: {
          width: "188px",
          height: "32px",
          ml:'10px',
          mt:'10px',
        },
      },
      align: {
        center: {
          m: "0 auto",
          mb: "10px",
        },
      },
    },
  });