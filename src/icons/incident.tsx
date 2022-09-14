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
    <g clipPath="url(#clip0_386_235)">
      <path
        d="M32.6665 7V16.3333C32.6665 16.9522 32.9123 17.5457 33.3499 17.9832C33.7875 18.4208 34.381 18.6667 34.9998 18.6667H44.3332"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M39.6665 49H16.3332C15.0955 49 13.9085 48.5083 13.0333 47.6332C12.1582 46.758 11.6665 45.571 11.6665 44.3333V11.6667C11.6665 10.429 12.1582 9.242 13.0333 8.36683C13.9085 7.49167 15.0955 7 16.3332 7H32.6665L44.3332 18.6667V44.3333C44.3332 45.571 43.8415 46.758 42.9663 47.6332C42.0912 48.5083 40.9042 49 39.6665 49Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g clipPath="url(#clip1_386_235)">
        <path
          d="M28 28C30 25.04 28 21 27 20C27 23.038 25.227 24.741 24 26C22.774 27.26 22 29.24 22 31C22 32.5913 22.6321 34.1174 23.7574 35.2426C24.8826 36.3679 26.4087 37 28 37C29.5913 37 31.1174 36.3679 32.2426 35.2426C33.3679 34.1174 34 32.5913 34 31C34 29.468 32.944 27.06 32 26C30.214 29 29.209 29 28 28Z"
          stroke="#B79313"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_386_235">
        <rect width="56" height="56" fill="white" />
      </clipPath>
      <clipPath id="clip1_386_235">
        <rect
          width="24"
          height="24"
          fill="white"
          transform="translate(16 16)"
        />
      </clipPath>
    </defs>
  </svg>
);
