import React from "react";
export interface IconProps {
  width?: string;
  height?: string;
}

export default (props: IconProps) => (
  <svg
    width="56"
    height="56"
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ marginTop: "30px" }}
  >
    <g clipPath="url(#clip0_386_230)">
      <path
        d="M44.3333 20.3234L31.8897 10.6448C30.7976 9.79523 29.4535 9.33398 28.07 9.33398C26.6864 9.33398 25.3423 9.79523 24.2503 10.6448L11.8043 20.3234C11.0564 20.9051 10.4512 21.65 10.0351 22.5013C9.61896 23.3525 9.40287 24.2876 9.40332 25.2351V42.0351C9.40332 43.2728 9.89499 44.4598 10.7702 45.3349C11.6453 46.2101 12.8323 46.7018 14.07 46.7018H42.07C43.3077 46.7018 44.4946 46.2101 45.3698 45.3349C46.245 44.4598 46.7367 43.2728 46.7367 42.0351V25.2351C46.7367 23.3148 45.85 21.5018 44.3333 20.3234Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 28L20 32L24 36M20 32H31C32.0609 32 33.0783 31.5786 33.8284 30.8284C34.5786 30.0783 35 29.0609 35 28C35 26.9391 34.5786 25.9217 33.8284 25.1716C33.0783 24.4214 32.0609 24 31 24H30"
        stroke="#B79313"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_386_230">
        <rect width="56" height="56" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
