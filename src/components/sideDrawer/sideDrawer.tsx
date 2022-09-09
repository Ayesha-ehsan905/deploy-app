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
          <Text
            align={"left"}
            css={{
              marginTop: "30px",
              fontSize: "22px",
              marginLeft: "12px",
              cursor: "pointer",
            }}
            onClick={props.drawer}
          >
            X
          </Text>
          <Image size={"sm"} src={logo}></Image>

          <Span SideDrawer={"line"} />
          <Box postion={"left"}>
            <Text align={"left"}>HOME</Text>
          </Box>
          <Span SideDrawer={"line"} css={{ marginTop: "40px" }} />
          <Span SideDrawer={"line"} css={{ marginTop: "65px" }} />
          <Box postion={"left"} css={{ marginTop: "65px" }}>
            <Text align={"left"}>ABOUT</Text>
          </Box>

          <Span SideDrawer={"line"} css={{ marginTop: "105px" }} />
          <Span SideDrawer={"line"} css={{ marginTop: "135px" }} />
          <Box
            postion={"left"}
            css={{ backgroundImage: "none", marginTop: "135px" }}
          >
            <Text align={"left"}>LOGIN</Text>
          </Box>

          <Button
            style={"basestyle"}
            css={{
              marginTop: "285px",
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
