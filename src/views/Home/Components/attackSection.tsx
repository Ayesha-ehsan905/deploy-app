import React from "react";
import { Container } from "../../../components/Box";
import { Text } from "../../../components/Text";
import {
  AlertIcon,
  AttackIcon,
  IncidentIcon,
  LockIcon,
  NormalIcon,
  TeamIcon,
  OfficeIcon,
} from "../../../icons/index";
import { AttackSection, InfoText } from "./homeStyle";

export default () => {
  return (
    <>
      <Container>
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

        <AttackSection style={"parent"}>
          <AttackSection style={"child"}>
            <OfficeIcon />
            <InfoText fonts={"lg"}>Office</InfoText>
            <AttackSection Arrow={"line"} />
          </AttackSection>
          <AttackSection></AttackSection>
          <AttackSection style={"child"}>
            <AlertIcon />
            <InfoText fonts={"lg"}>DLT Alert Validation</InfoText>
            <AttackSection Arrow={"line"} />
          </AttackSection>
          <AttackSection style={"child"}>
            <AttackIcon />
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
            <TeamIcon />
            <InfoText fonts={"lg"}>Paniked Team</InfoText>
            <AttackSection Arrow={"lines"} />
          </AttackSection>
          <AttackSection style={"child"}>
            <IncidentIcon />
            <InfoText fonts={"lg"}>IR Team/ Incident Report</InfoText>
            <AttackSection Arrow={"line"} />
          </AttackSection>
          <AttackSection style={"child"}>
            <LockIcon />
            <InfoText fonts={"lg"}>Ransomware Lockout</InfoText>
            <AttackSection Arrow={"lines"} />
          </AttackSection>
          <AttackSection></AttackSection>
          <AttackSection style={"child"}>
            <NormalIcon />
            <InfoText fonts={"lg"}>Back to Normal</InfoText>
          </AttackSection>
        </AttackSection>
      </Container>
    </>
  );
};
