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
    <g clipPath="url(#clip0_0_1)">
      <path
        d="M40 21.9999C39.5109 18.4803 37.8781 15.2192 35.3533 12.7189C32.8284 10.2186 29.5515 8.61774 26.0273 8.16301C22.5032 7.70827 18.9272 8.42486 15.8504 10.2024C12.7736 11.9799 10.3665 14.7198 9 17.9999M8 9.9999V17.9999H16"
        stroke="#B79313"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 26C8.48912 29.5196 10.1219 32.7807 12.6467 35.281C15.1716 37.7813 18.4485 39.3822 21.9727 39.8369C25.4968 40.2916 29.0728 39.575 32.1496 37.7975C35.2264 36.02 37.6335 33.2801 39 30M40 38V30H32"
        stroke="#B79313"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <path
      d="M18 24L22 28L30 20"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <clipPath id="clip0_0_1">
        <rect width="48" height="48" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
