import { Text } from "../components/Text";
import React, { useState } from "react";
import { Navbar } from "../components/navBar";
import { Box, Container } from "../components/Box";
import { Button } from "../components/Button";
import { Image } from "../components/Image";
import logo from "../assets/logo.png";
import SideDrawer from "../components/sideDrawer/sideDrawer";
import DrawerToggleButton from "../components/sideDrawer/DrawerToggleButton";
import { Link } from "react-router-dom";

const navBar = () => {
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
      <Container>
        <Box css={{ width: "100%" }}>
          {/* NAVBAR BOX */}

          {/* Normal Navbar */}
          <Navbar navbar_Style={"main_navbar"}>
            <DrawerToggleButton
              drawerClickHandler={drawerTogglerClickHandler}
            />
            <Box
              css={{
                // flex: 1,
                display: "flex",
                flexDirection: "row",
                width: "50%",
              }}
            >
              <Image
                size={"sm"}
                src={logo}
                css={{
                  "@bp0": {
                    // display: "none",
                    mt: "20px",
                    ml: "60px",
                    mb: "0px",
                  },
                }}
              />
            </Box>
            <Box
              css={{
                flex: 1,
                flexDirection: "row",
                display: "inherit",
                justifyContent: "end",
                width: "50%",
                "@bp0": {
                  display: "none",
                },
              }}
            >
              <Text color={"white"} align={"center"}>
                <Link to="/"> HOME</Link>
              </Text>
              <Text color={"white"} align={"center"}>
                <Link to="/about">ABOUT</Link>
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
      </Container>
    </>
  );
};

export default navBar;
