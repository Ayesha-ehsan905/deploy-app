import { Text } from "../components/Text";
import React, { useState } from "react";
import { Navbar } from "../components/navBar";
import { Box } from "../components/Box";
import { Button } from "../components/Button";
import { Image } from "../components/Image";
import logo from "../assets/logo.png";
import pic1 from "../assets/1.png";
import pic2 from "../assets/2.png";
import pic3 from "../assets/Rectangle 307.png";
import SideDrawer from "../components/sideDrawer/sideDrawer";
import DrawerToggleButton from "../components/sideDrawer/DrawerToggleButton";
import { Input } from "../components/Input";
import svg from "../assets/search.svg";
import NAVBAR from "./NAVBAR";
const Home = () => {
  return (
    <>
      <NAVBAR />
      {/* 1st row Parent Div */}
      <Box
        as="div"
        css={{
          mt: "50px",
          display: "flex",
          flexDirection: "row",
          width: "100%",
          ml: "30px",
          "@bp0": {
            flexDirection: "column",
          },
        }}
      >
        {/* 1strow  Heading child Div*/}
        <Box
          as="div"
          css={{
            // flex: "none",
            width: "50%",
            "@bp0": {
              width: "80%",
            },
          }}
        >
          <Text fonts={"sans"} color={"white"} as="h1" css={{ ft: "32px" }}>
            Active Cyber Threats Require Better Insurance
          </Text>
          <Text color={"muted"} css={{ ft: "24px" }}>
            Integrated security and cyber insurance protect you from risks
            before they strike and enable faster recovery if they do
          </Text>
        </Box>
        <Box
          as="div"
          css={{
            // flex: "none",
            width: "50%",
            ml: "60px",
            "@bp0": {
              width: "80%",
              mr: "10px",
              ml: "0px",
            },
          }}
        >
          <Image src={pic1} size={"medium"} />
        </Box>
      </Box>
      {/* 2nd row input box */}
      {/* Parent Div  2nd row */}
      <Box
        as="div"
        css={{
          display: "flex",
          width: "100%",
          flex: "none",
          justifyContent: "center",
          textAlign: "center",
          "@bp0": {
            textAlign: "left",
            ml: "30px",
          },
        }}
      >
        <Box
          css={{
            padding: "5px",
            width: "40%",
            justifyContent: "center",
            // linearGradient:
            //   " 90.18deg, rgba(50, 56, 91, 0.57) 0%, rgba(26, 31, 65, 0.57) 100%",
          }}
        >
          <Input
            size={"sm"}
            placeholder="Search"
            css={{
              "@bp0": {
                width: "80%",
                ml: "0px",
              },
            }}
          ></Input>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            // stroke-linecap="round"
            // stroke-linejoin="round"
            style={{
              position: "relative",
              right: "80px",
              top: "5px",
              color: "white",
            }}
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="10" cy="10" r="7" />
            <line x1="21" y1="21" x2="15" y2="15" />
          </svg>
        </Box>
      </Box>
      {/* 3rd row */}
      <Box
        as="div"
        css={{
          mt: "60px",
          display: "flex",
          flexDirection: "row",
          width: "100%",
          ml: "30px",
          "@bp0": {
            flexDirection: "column",
          },
        }}
      >
        {/* 1strow  Heading child Div*/}
        <Box
          as="div"
          css={{
            // flex: "none",
            width: "50%",
            "@bp0": {
              width: "80%",
            },
          }}
        >
          <Text fonts={"sans"} color={"white"} as="h1" css={{ ft: "32px" }}>
            How we're better
          </Text>
          <Text color={"muted"} css={{ ft: "24px" }}>
            DLT Alert is the first active monitoring and self-validating cyber
            insurance company. Through direct integration with threat monitoring
            services, external incident validation sources, and the fastest
            block chain protocols DLT Alert approves claims in real-time
            improving customer payouts, remediation times, and lowering
            premiums. This means less risk and more uptime for our clients
          </Text>
        </Box>
        <Box
          as="div"
          css={{
            // flex: "none",
            width: "50%",
            ml: "60px",
            "@bp0": {
              width: "80%",
              mr: "30px",
            },
          }}
        >
          <Image src={pic2} size={"medium"} />
        </Box>
      </Box>
      {/* 4th rwo parent div */}
      <Box
        as="div"
        css={{
          width: "100%",
        }}
      >
        {/* 4th div heading */}
        <Text
          fonts={"sans"}
          color={"white"}
          as="h1"
          css={{
            textAlign: "center",
            ft: "32px",
          }}
        >
          Cyber Coverage in 3 Setps
        </Text>
      </Box>
      {/* 4th row parent div end here */}

      {/* dotted line */}
      <Box
        css={{
          width: "29%",
          position: "absolute",
          left: "19%",
          mt: "20px",
          border: "2px dashed #828282",
          "@bp0": {
            display: "none",
          },
        }}
      ></Box>

      <Box
        css={{
          width: "29%",
          position: "absolute",
          left: "52%",
          mt: "20px",
          border: "2px dashed #828282",
          "@bp0": {
            display: "none",
          },
        }}
      ></Box>
      {/* //5th row parent div  */}
      <Box
        css={{
          width: "100%",
          display: "flex",
          flexDirection: "row",

          justifyContent: "space-between",
          alignItems: "center",

          "@bp0": {
            flexDirection: "column",
          },
        }}
      >
        {/* child div with column direction */}
        {/* 1stchild */}
        <Box
          as="div"
          css={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            width: "100%",
            flexDirection: "column",
            "@bp0": {
              mt: "30px",
            },
          }}
        >
          {/* //child Circle */}

          <Box
            css={{
              flex: "none",
              linearGradient:
                " 153.32deg, #B79313 -65.62%, rgba(233, 209, 107, 0.1) 83.28%",
              br: "50%",
              height: "50px",
              width: "10%",
              "@bp0": {
                width: "7%",
              },
            }}
          >
            <Text
              css={{
                ft: "32px",
                mt: "0px",
                color: "$white",
                textAlign: "center",
              }}
            >
              1
            </Text>
          </Box>
          {/* Line */}
          <Box
            css={{
              border: "1px solid #828282",
              transform: " rotate(-90deg)",
              width: "40px",
              mt: "20px",
            }}
          ></Box>
          {/* Box Child with icon */}
          <Box
            style={"rounded"}
            css={{
              // width: "90%",
              ml: "30px",
              mr: "30px",
              "@bp0": {
                ml: "30px",
                width: "90%",
                mt: "20px",
              },
            }}
          >
            {/* icons */}
            <Box
              css={{
                width: "50px",
                height: "50px",
                ml: "30px",
                mt: "20px",
                br: "6px",
                linearGradient:
                  "153.32deg, rgba(255, 255, 255, 0.3) -65.62%, rgba(255, 255, 255, 0.1) 83.28%",
              }}
            >
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
            </Box>

            <Text
              fonts={"sans"}
              color={"white"}
              as="h1"
              css={{ ft: "24px", ml: "30px" }}
            >
              Integrate
            </Text>
            <Text color={"muted"} css={{ ft: "16px", ml: "30px", mr: "20px" }}>
              Active threat sharing with your coverage means your insurance is
              one unified solution.
            </Text>
          </Box>
        </Box>

        {/* 2nd child */}
        <Box
          as="div"
          css={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            width: "100%",
            flexDirection: "column",
            "@bp0": {
              mt: "30px",
            },
          }}
        >
          {/* //child Circle */}

          <Box
            css={{
              flex: "none",
              linearGradient:
                " 153.32deg, #B79313 -65.62%, rgba(233, 209, 107, 0.1) 83.28%",
              br: "50%",
              height: "50px",
              width: "10%",
              "@bp0": {
                width: "7%",
              },
            }}
          >
            <Text
              css={{
                ft: "32px",
                mt: "0px",
                color: "$white",
                textAlign: "center",
              }}
            >
              2
            </Text>
          </Box>
          {/* Line */}
          <Box
            css={{
              border: "1px solid #828282",
              transform: " rotate(-90deg)",
              width: "40px",
              mt: "20px",
            }}
          ></Box>

          {/* Box Child with icon */}
          <Box
            style={"rounded"}
            css={{
              // width: "90%",
              ml: "30px",
              mr: "30px",
              // pb: "25px",
              "@bp0": {
                ml: "30px",
                width: "90%",
                mt: "20px",
              },
            }}
          >
            {/* icons */}
            <Box
              css={{
                width: "50px",
                height: "50px",
                ml: "30px",
                mt: "20px",
                br: "6px",
                linearGradient:
                  "153.32deg, rgba(255, 255, 255, 0.3) -65.62%, rgba(255, 255, 255, 0.1) 83.28%",
              }}
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_108_19)">
                  <path
                    d="M20 34C27.732 34 34 27.732 34 20C34 12.268 27.732 6 20 6C12.268 6 6 12.268 6 20C6 27.732 12.268 34 20 34Z"
                    stroke="#B79313"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M42 42L30 30"
                    stroke="#B79313"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 20L18 24L26 16"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_108_19">
                    <rect width="48" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Box>

            <Text
              fonts={"sans"}
              color={"white"}
              as="h1"
              css={{ ft: "24px", ml: "30px" }}
            >
              Validate
            </Text>
            <Text color={"muted"} css={{ ft: "16px", ml: "30px", mr: "20px" }}>
              AI powered claims approvals let your teams know exactly where they
              stand, instantly
            </Text>
          </Box>
        </Box>
        {/* 3rd child */}
        <Box
          as="div"
          css={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            width: "100%",
            flexDirection: "column",
            "@bp0": {
              mt: "30px",
            },
          }}
        >
          {/* //child Circle */}

          <Box
            css={{
              flex: "none",
              linearGradient:
                " 153.32deg, #B79313 -65.62%, rgba(233, 209, 107, 0.1) 83.28%",
              br: "50%",
              height: "50px",
              width: "10%",
              "@bp0": {
                width: "7%",
              },
            }}
          >
            <Text
              css={{
                ft: "32px",
                mt: "0px",
                color: "$white",
                textAlign: "center",
              }}
            >
              3
            </Text>
          </Box>
          {/* Line */}
          <Box
            css={{
              border: "1px solid #828282",
              transform: " rotate(-90deg)",
              width: "40px",

              mt: "20px",
            }}
          ></Box>
          {/* Box Child with icon */}
          <Box
            style={"rounded"}
            css={{
              // width: "90%",
              ml: "30px",
              mr: "30px",
              "@bp0": {
                ml: "30px",
                width: "90%",
                mt: "20px",
              },
            }}
          >
            {/* icons */}
            <Box
              css={{
                width: "50px",
                height: "50px",
                ml: "30px",
                mt: "20px",
                br: "6px",
                linearGradient:
                  "153.32deg, rgba(255, 255, 255, 0.3) -65.62%, rgba(255, 255, 255, 0.1) 83.28%",
              }}
            >
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
            </Box>

            <Text
              fonts={"sans"}
              color={"white"}
              as="h1"
              css={{ ft: "24px", ml: "30px" }}
            >
              Remediate
            </Text>
            <Text color={"muted"} css={{ ft: "16px", ml: "30px", mr: "20px" }}>
              Tamper proof incident and coverage summary enables IR teams to
              recover faster.
            </Text>
          </Box>
        </Box>
      </Box>
      {/*  5th row parent div */}

      {/* 6th div */}
      <Box css={{ mt: "50px" }}>heelo</Box>
    </>
  );
};

export default Home;

//Parent div and it will be row
//child div and it will be column and it will have circle line and box
