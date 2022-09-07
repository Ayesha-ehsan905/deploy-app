import { Text } from "../components/Text";
import React from "react";
import { Navbar } from "../components/navBar";
import { Box } from "../components/Box";
import { Button } from "../components/Button";
const Home = () => {
  return (
    <>
      <Box>
        <Navbar >
          <Box css={{display:"flex" ,justifyContent:"end"}}>

          <Text size="sm">HOME</Text>
          <Text size="sm">ABOUT</Text>
          <Text size="sm" >|</Text>
          <Text size="sm">LOGIN</Text>
          <Button>REGISTER</Button>
          </Box>
        </Navbar>
       
      </Box>
    </>
  );
};

export default Home;
