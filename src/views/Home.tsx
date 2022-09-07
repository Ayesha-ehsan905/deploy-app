import { Text } from "../components/Text";
import React from "react";
import { Navbar } from "../components/navBar";
import { Box } from "../components/Box";
import { Button } from "../components/Button";
import { Image } from "../components/Image";
import logo from "../assets/logo.png";
const Home = () => {
  return (
    <>
      <Box>
        <Navbar>
          {/* <Box css={{display:'flex' ,justifyContent:'end' ,width:'500px', }}> */}
          <Box css={{ float: "left" }}>
            <Image
              src={logo} size ="lg"
              css={{ display:'flex', justifyContent: 'start ' }}
            ></Image>
            <Box  postion="right">
              <Text size="sm">HOME</Text>
              <Text size="sm">ABOUT</Text>
              <Text size="sm">|</Text>
              <Text size="sm">LOGIN</Text>
              <Button>REGISTER</Button>
            </Box>
          </Box>
        </Navbar>
      </Box>
    </>
  );
};

export default Home;
