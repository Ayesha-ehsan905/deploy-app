import React from "react";

import { Box } from "../Box";
import { Navbar } from "../navBar";
import { Text } from "../Text";
import { Image } from "../Image";
import { Span } from "../Span";
import { Button } from "../Button";
import logo from "../../assets/logo.png";

const SideDrawer = (props) => {
  return (
    <>
      <Box>
        <Navbar navbar_Style={"mobile_navebar"}>
          {/* child div */}
          <Box
            css={{
              mt: "40px",
              ml: "20px",
            }}
          >
            <Text
              color={"white"}
              css={{
                fontSize: "24px",
                display: "inline",
                mr: "30px",

                cursor: "pointer",
              }}
              onClick={props.drawer}
            >
              X
            </Text>
            <Image
              size={"sm"}
              src={logo}
              css={{ mt: "0px", ml: "0px" }}
            ></Image>
          </Box>
          <Span
            SideDrawer={"line"}
            css={{
              mt: "50px",
            }}
          />
          <Box postion={"center"}>
            <Text
              color={"white"}
              css={{
                mt: "50px",
                ml: "20px",
              }}
            >
              HOME
            </Text>
          </Box>
          <Span SideDrawer={"line"} css={{ mt: "0px" }} />

          <Span SideDrawer={"line"} css={{ marginTop: "35px" }} />
          <Box postion={"center"}>
            <Text
              color={"white"}
              css={{
                mt: "35px",
                ml: "20px",
                // m: "-20px",
              }}
            >
              ABOUT
            </Text>
          </Box>

          <Span SideDrawer={"line"} css={{ marginTop: "0px" }} />
          <Span SideDrawer={"line"} css={{ marginTop: "25px" }} />
          <Box
            postion={"center"}
            css={{
              backgroundImage: "none",
              marginTop: "55px",
              flex: 1,
              ml: "20px",
            }}
          >
            <Text color={"white"}>LOGIN</Text>
          </Box>

          <Button
            style={"basestyle"}
            css={{
              mr: "0px",
              mt: "45px",
            }}
          >
            REGISTER
          </Button>
        </Navbar>
      </Box>
    </>
  );
};

export default SideDrawer;
