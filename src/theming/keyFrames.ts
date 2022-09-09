import { keyframes } from "@stitches/react";

const animations = keyframes({
  0: {
    opacity: 0,
    transition: "opacity 0.35s, transform 0.35s",
    transform: "scale(0,1)",
  },
  100: {
    opacity: "1",
    transform: "scale(1)",
  },
});

export default animations;
