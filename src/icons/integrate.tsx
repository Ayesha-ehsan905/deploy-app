import React from "react";
export interface IconProps {
  width?: string;
  height?: string;
}

export default (props: IconProps) => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 5.5H20C20.2761 5.5 20.5 5.72386 20.5 6V20C20.5 20.2761 20.2761 20.5 20 20.5H6C5.72386 20.5 5.5 20.2761 5.5 20V6C5.5 5.72386 5.72386 5.5 6 5.5Z"
      stroke="white"
      strokeWidth="3"
    />
    <path
      d="M6 27.5H20C20.2761 27.5 20.5 27.7239 20.5 28V42C20.5 42.2761 20.2761 42.5 20 42.5H6C5.72386 42.5 5.5 42.2761 5.5 42V28C5.5 27.7239 5.72386 27.5 6 27.5Z"
      stroke="#B79313"
      strokeWidth="3"
    />
    <path
      d="M28 5.5H42C42.2761 5.5 42.5 5.72386 42.5 6V20C42.5 20.2761 42.2761 20.5 42 20.5H28C27.7239 20.5 27.5 20.2761 27.5 20V6C27.5 5.72386 27.7239 5.5 28 5.5Z"
      stroke="#B79313"
      strokeWidth="3"
    />
    <path
      d="M28 27.5H42C42.2761 27.5 42.5 27.7239 42.5 28V42C42.5 42.2761 42.2761 42.5 42 42.5H28C27.7239 42.5 27.5 42.2761 27.5 42V28C27.5 27.7239 27.7239 27.5 28 27.5Z"
      stroke="#B79313"
      strokeWidth="3"
    />
  </svg>
);
