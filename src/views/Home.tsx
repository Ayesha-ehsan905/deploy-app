import { Text } from "../components/Text";
import React, { useState } from "react";
import { Navbar } from "../components/navBar";
import { Box } from "../components/Box";
import { Button } from "../components/Button";
import { Image } from "../components/Image";
import logo from "../assets/logo.png";
import pic1 from "../assets/1.png";
import pic2 from "../assets/2.png";
import SideDrawer from "../components/sideDrawer/sideDrawer";
import DrawerToggleButton from "../components/sideDrawer/DrawerToggleButton";
import { styled } from "../theming/darkTheme";
import { Input } from "../components/Input";
import { BiSearchAlt2 } from "react-icons/bi";
const Home = () => {
  const [sideDrawerOpen, setsideDrawer] = useState<boolean>(false);

  const drawerTogglerClickHandler = () => {
    setsideDrawer(!sideDrawerOpen);
    return sideDrawerOpen;
  };
  const drawerCloseClickHandler = () => {
    setsideDrawer(false);
    return sideDrawerOpen;
  };

  //check if it's close then hide the side drawer

  let sideDrawer;
  if (sideDrawerOpen) {
    sideDrawer = <SideDrawer drawer={drawerCloseClickHandler} />;
  }
  return (
    <>
      <Box css={{}}>
        {/* NAVBAR BOX */}
        <Box>
          {/* Normal Navbar */}
          <Navbar navbar_Style={"main_navbar"}>
            <DrawerToggleButton
              drawerClickHandler={drawerTogglerClickHandler}
            />
            <Box>
              <Image size={"sm"} src={logo} />
            </Box>
            <Box
              css={{
                display: "flex",
                justifyContent: "end",
                "@bp0": {
                  display: "none",
                },
              }}
            >
              <Text color={"white"} align={"center"}>
                HOME
              </Text>
              <Text color={"white"} align={"center"}>
                ABOUT
              </Text>
              <Text color={"white"} align={"center"}>
                |
              </Text>
              <Text color={"white"} align={"center"}>
                LOGIN
              </Text>
              <Button style={"basestyle"}>REGISTER</Button>
            </Box>
          </Navbar>

          {/* Drawer Menu */}
          {sideDrawer}
        </Box>
        {/* 1st row */}
        <Box>
          {/* 1strow  Heading*/}
          <Box
            as="div"
            css={{
              position: "absolute",
              width: "500px",
              left: "74px",
              top: "170px",
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
              Active Cyber Threats Require Better Insurance
            </Text>
            <Text
              color={"muted"}
              fonts={"inter"}
              css={{
                ft: "24px",
              }}
            >
              Integrated security and cyber insurance protect you from risks
              before they strike and enable faster recovery if they do
            </Text>
          </Box>
          {/* 1st row Image */}
          <Box as="div">
            <Image src={pic1} size={"medium"} />
          </Box>
          {/* 1st row text */}
        </Box>
        {/* 2nd row input box */}
        <Box as="div">
          <Input size={"sm"} placeholder="Search"></Input>
          <BiSearchAlt2
            style={{
              backgroundColor: "transparent",
              color: "white",
              position: "absolute",
              left: "810px",
              top: "520px",
            }}
          />
        </Box>

        {/* 3rd row */}
        <Box>
          {/* 3rdrow  Heading*/}
          <Box
            as="div"
            css={{
              position: "absolute",
              width: "500px",
              left: "74px",
              top: "600px",
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
          </Box>
          {/* 3rd row Image */}
          <Box as="div">
            <Image src={pic2} size={"large"} />
          </Box>
          {/* 3rd row text */}
          <Box
            as="div"
            css={{
              position: "absolute",
              width: "500px",
              left: "74px",
              top: "660px",
            }}
          >
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
          </Box>
        </Box>
      </Box>
      {/* //Footer */}
      <Box
        postion={"right"}
        css={{
          bg: "black",
        }}
      >
        <Text>Hellow World</Text>
        <Image
          src={logo}
          css={{
            left: "200px",
            top: "60px",
          }}
        />
      </Box>
    </>
  );
};

export default Home;
