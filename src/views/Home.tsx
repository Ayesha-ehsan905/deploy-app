import { Text } from "../components/Text";
import React, { useState } from "react";
import { Navbar } from "../components/navBar";
import { Box } from "../components/Box";
import { Button } from "../components/Button";
import { Image } from "../components/Image";
import logo from "../assets/logo.png";
import SideDrawer from "../components/sideDrawer/sideDrawer";
import DrawerToggleButton from "../components/sideDrawer/DrawerToggleButton";

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
      <Box>
        <Navbar navbar_Style={"main_navbar"}>
          <DrawerToggleButton drawerClickHandler={drawerTogglerClickHandler} />
          <Box>
            <Image
              size={"sm"}
              src={logo}
              css={{
                "@bp0": {
                  // display: "none",
                  marginTop: "0px",
                  marginLeft: "70px",
                },
                "@bp2": {
                  width: "150px",
                  top: "30px",
                },
              }}
            ></Image>
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
            <Text
              align={"center"}
              css={{
                "@bp2": {
                  fontSize: "13px",
                  marginLeft: "10px",
                },
                "@bp3": {
                  fontSize: "14px",
                  marginLeft: "20px",
                },
              }}
            >
              HOME
            </Text>
            <Text
              align={"center"}
              css={{
                "@bp2": {
                  fontSize: "13px",
                  marginLeft: "10px",
                },
                "@bp3": {
                  fontSize: "14px",
                  marginLeft: "20px",
                },
              }}
            >
              ABOUT
            </Text>
            <Text
              align={"center"}
              css={{
                "@bp2": {
                  fontSize: "13px",
                  marginLeft: "10px",
                },
                "@bp3": {
                  fontSize: "14px",
                  marginLeft: "20px",
                },
              }}
            >
              |
            </Text>
            <Text
              align={"center"}
              css={{
                "@bp2": {
                  fontSize: "13px",
                  marginLeft: "10px",
                },
                "@bp3": {
                  fontSize: "14px",
                  marginLeft: "20px",
                },
              }}
            >
              LOGIN
            </Text>
            <Button
              style={"basestyle"}
              css={{
                "@bp2": {
                  width: "120px",
                  marginLeft: "20px",
                  marginRight: "20px",
                  fontSize: "12px",
                  height: "37px",
                },
                "@bp3": {
                  width: "130px",
                  marginLeft: "25px",
                  marginRight: "25px",
                  fontSize: "14px",
                  height: "37px",
                },
              }}
            >
              REGISTER
            </Button>
          </Box>
        </Navbar>
        {sideDrawer}
      </Box>
    </>
  );
};

export default Home;
