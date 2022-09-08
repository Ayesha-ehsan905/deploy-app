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
    sideDrawer =<SideDrawer   drawer= {drawerCloseClickHandler}/>;
  }
  return (
    <>
      <Box>
        <Navbar navbar_Style={"main_navbar"}>
          <DrawerToggleButton drawerClickHandler={drawerTogglerClickHandler}  />
          
          <Image size={'sm'} src={logo}></Image>

          <Text align={"center"}
          
          > HOME</Text>
          <Text align={"center"}>ABOUT</Text>
          <Text align={"center"}>|</Text>
          <Text align={"center"}>LOGIN</Text>
          <Button style={"Register_btn"}>REGISTER</Button>
        </Navbar>
        {sideDrawer   }
      </Box>
    </>
  );
};

export default Home;
