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
    <g clipPath="url(#clip0_386_245)">
      <path
        d="M20.9998 11.6665H16.3332C15.0955 11.6665 13.9085 12.1582 13.0333 13.0333C12.1582 13.9085 11.6665 15.0955 11.6665 16.3332V44.3332C11.6665 45.5708 12.1582 46.7578 13.0333 47.633C13.9085 48.5082 15.0955 48.9998 16.3332 48.9998H39.6665C40.9042 48.9998 42.0912 48.5082 42.9663 47.633C43.8415 46.7578 44.3332 45.5708 44.3332 44.3332V16.3332C44.3332 15.0955 43.8415 13.9085 42.9663 13.0333C42.0912 12.1582 40.9042 11.6665 39.6665 11.6665H34.9998"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30.3333 7H25.6667C23.0893 7 21 9.08934 21 11.6667C21 14.244 23.0893 16.3333 25.6667 16.3333H30.3333C32.9107 16.3333 35 14.244 35 11.6667C35 9.08934 32.9107 7 30.3333 7Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 32.6667L25.6667 37.3333L35 28"
        stroke="#B79313"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_386_245">
        <rect width="56" height="56" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
