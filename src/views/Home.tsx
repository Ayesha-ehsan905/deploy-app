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
import { styled } from "../theming/darkTheme";
import { Input } from "../components/Input";
import { BiSearchAlt2 } from "react-icons/bi";
import NAVBAR from "./NAVBAR";
const Home = () => {
  return (
    <>
      <NAVBAR />
      <Box>
        {/* 1st row Parent Div */}
        <Box
          as="div"
          css={{
            position: "relative",
            width: "100%",
            overflowX: "clip",
          }}
        >
          {/* 1strow  Heading child Div*/}
          <Box
            as="div"
            css={{
              position: "absolute",
              width: "50%",
              left: "74px",
              top: "170px",
              "@bp0": {
                width: "70%",
              },
              "@bp2": {
                width: "80%",
              },
            }}
          >
            <Text
              fonts={"sans"}
              color={"white"}
              as="h1"
              css={{
                ft: "32px",
                "@bp0": {
                  ft: "24px",
                },
                "@bp3": {
                  ft: "20px",
                },
                "@bp4": {
                  ft: "28px",
                },
              }}
            >
              Active Cyber Threats Require Better Insurance
            </Text>
            <Text
              color={"muted"}
              fonts={"inter"}
              css={{
                ft: "24px",
                "@bp0": {
                  ft: "21px",
                },
                "@bp3": {
                  ft: "18px",
                },
                "@bp4": {
                  ft: "20px",
                },
              }}
            >
              Integrated security and cyber insurance protect you from risks
              before they strike and enable faster recovery if they do
            </Text>

            <Image src={pic1} size={"medium"} />
          </Box>
        </Box>
        {/* 2nd row input box */}
        {/* Parent Div  2nd row */}
        <Box
          as="div"
          css={{
            position: "relative",
            width: "100%",
          }}
        >
          <Box
            as="div"
            css={{
              position: "absolute",
              left: "400px",
              top: "500px",
              width: "50%",
              "@bp0": {
                width: "100%",
                left: "74px",
                top: "800px",
              },
              "@bp2": {
                width: "100%",
                left: "74px",
                top: "800px",
              },
            }}
          >
            <Input size={"sm"} placeholder="Search"></Input>
            <BiSearchAlt2
              style={{
                backgroundColor: "transparent",
                color: "white",
                position: "absolute",
                left: "290px",
                top: "23px",
              }}
            />
          </Box>
        </Box>

        {/* 3rd row */}
        <Box
          css={{
            position: "relative",
            width: "100%",
            "@bp0": {
              top: "300px",
            },
            "@bp2": {
              top: "300px",
            },
          }}
        >
          {/* 3rdrow  Heading*/}
          <Box
            as="div"
            css={{
              position: "absolute",
              width: "50%",
              left: "74px",
              top: "600px",

              "@bp0": {
                width: "75%",
              },
              "@bp2": {
                width: "80%",
              },
            }}
          >
            <Text
              fonts={"sans"}
              color={"white"}
              as="h1"
              css={{
                ft: "32px",
              }}
            >
              How we're better
            </Text>
            <Text
              color={"muted"}
              fonts={"inter"}
              css={{
                ft: "24px",
              }}
            >
              DLT Alert is the first active monitoring and self-validating cyber
              insurance company. Through direct integration with threat
              monitoring services, external incident validation sources, and the
              fastest block chain protocols DLT Alert approves claims in
              real-time improving customer payouts, remediation times, and
              lowering premiums. This means less risk and more uptime for our
              clients.
            </Text>

            <Image src={pic2} size={"large"} />
          </Box>
        </Box>

        {/* 4th rwo parent div */}
        <Box
          as="div"
          css={{
            position: "relative",
            width: "100%",
          }}
        >
          <Box postion={"center"}>
            <Image src={pic3} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
