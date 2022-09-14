import React from "react";

import { Box } from "../../../components/Box";
import { Text } from "../../../components/Text";
import Alert from "../../../icons/alert";
import Attack from "../../../icons/attack";
import Incident from "../../../icons/incident";
import LineDown from "../../../icons/lineDown";
import LineUp from "../../../icons/lineUp";
import Lockout from "../../../icons/lockout";
import Normal from "../../../icons/normal";
import Office from "../../../icons/office";
import Teams from "../../../icons/teams";
import { AttackSection, InfoText } from "./homeStyle";

export default () => {
  return (
    <>
      <AttackSection as="div" font={"parent"}>
        <Text
          fonts={"sans"}
          color={"white"}
          as="h1"
          css={{
            textAlign: "center",
            ft: "32px",
            mb: "90px",
          }}
        >
          Ready for the Next Global Attack?
        </Text>
      </AttackSection>
      <Box
        css={{
          width: "100%",
          height: "100%",
          position: "absolute",
          "@bp2": { display: "none" },
        }}
      >
        <LineUp />
      </Box>
      <AttackSection style={"parent"}>
        <AttackSection style={"child"}>
          <Office />
          <InfoText fonts={"lg"}>Office</InfoText>
          <AttackSection Arrow={"line"} />
        </AttackSection>
        <AttackSection></AttackSection>
        <AttackSection style={"child"}>
          <Alert />
          <InfoText fonts={"lg"}>DLT Alert Validation</InfoText>
          <AttackSection Arrow={"line"} />
        </AttackSection>
        <AttackSection style={"child"}>
          <Attack />
          <InfoText fonts={"lg"}>Phishing Attack</InfoText>
          <AttackSection
            Arrow={"line"}
            css={{
              "@bp2": {
                mt: "30px",
              },
              "@bp0": {
                mt: "0px",
              },
            }}
          />
        </AttackSection>
        <AttackSection style={"child"}>
          <Teams />
          <InfoText fonts={"lg"}>Paniked Team</InfoText>
          <AttackSection Arrow={"lines"} />
        </AttackSection>
        <AttackSection style={"child"}>
          <Incident />
          <InfoText fonts={"lg"}>IR Team/ Incident Report</InfoText>
          <AttackSection Arrow={"line"} />
        </AttackSection>
        <AttackSection style={"child"}>
          <Lockout />
          <InfoText fonts={"lg"}>Ransomware Lockout</InfoText>
          <AttackSection Arrow={"lines"} />
        </AttackSection>
        <AttackSection></AttackSection>
        <AttackSection style={"child"}>
          <Normal />
          <InfoText fonts={"lg"}>Back to Normal</InfoText>
        </AttackSection>
      </AttackSection>
      <Box
        css={{
          width: "100%",
          height: "100%",
          position: "absolute",
          "@bp2": { display: "none" },
        }}
      >
        <LineDown />
      </Box>
    </>
  );
};
