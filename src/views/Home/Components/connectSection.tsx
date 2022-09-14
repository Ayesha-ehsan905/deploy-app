import { Box } from "../../../components/Box";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { Text } from "../../../components/Text";
import { ConnectSection, InfoText } from "./homeStyle";
import React from "react";
export default () => {
  return (
    <>
      <ConnectSection style={"sm"}>
        <InfoText fonts={"sm"}>DLT Alert Solutions</InfoText>
        <InfoText fonts={"md"}>
          DLT Alert offers warranty protection from ransomware attacks and full
          cyber security policies through our trusted partner network.
        </InfoText>

        <Box
          css={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            "@bp0": {
              flexDirection: "column",
            },
          }}
        >
          <Input size={"md"} placeholder="Enter Email"></Input>
          <Button style={"basetyle_connect"}>REGISTER</Button>
        </Box>
      </ConnectSection>
    </>
  );
};
