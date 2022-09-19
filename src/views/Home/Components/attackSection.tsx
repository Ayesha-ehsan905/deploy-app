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
  ArrowIcon,
} from "../../../icons/index";
import { AttackSection, InfoText } from "./homeStyle";

export default () => {
  return (
    <>
      <Container>
        <AttackSection as="div" className="heading">
          <Text
            fonts={"sans"}
            color={"white"}
            as="h1"
            css={{
              textAlign: "center",
              ft: "32px",
              // mb: "90px",
              m: "60px auto",
              mb: "100px",
            }}
          >
            Ready for the Next Global Attack?
          </Text>
        </AttackSection>

        <AttackSection style={"parent"}>
          <AttackSection style={"child"}>
            <OfficeIcon />
            <InfoText fonts={"lg"}>Office</InfoText>
            <AttackSection className="arrow_styles">
              <ArrowIcon />
            </AttackSection>
          </AttackSection>
          <AttackSection className="gap_display"></AttackSection>
          <AttackSection style={"child"}>
            <AlertIcon />
            <InfoText fonts={"lg"}>DLT Alert Validation</InfoText>

            <AttackSection className="arrow_Style">
              <ArrowIcon />
            </AttackSection>
          </AttackSection>
          <AttackSection style={"child"}>
            <AttackIcon />
            <InfoText fonts={"lg"}>Phishing Attack</InfoText>
            <AttackSection className="arrow_styles">
              <ArrowIcon />
            </AttackSection>
          </AttackSection>
          <AttackSection className="teams_style">
            <TeamIcon />
            <InfoText fonts={"lg"}>Paniked Team</InfoText>
            {/* <AttackSection className="image">Hello</AttackSection> */}
            <AttackSection className="arrow_Styles">
              <ArrowIcon />
            </AttackSection>
          </AttackSection>
          <AttackSection style={"child"}>
            <IncidentIcon />
            <InfoText fonts={"lg"}>IR Team/ Incident Report</InfoText>
            <AttackSection className="arrow_Style">
              <ArrowIcon />
            </AttackSection>
          </AttackSection>
          <AttackSection style={"child"}>
            <LockIcon />
            <InfoText fonts={"lg"}>Ransomware Lockout</InfoText>
            <AttackSection className="arrow_Styles">
              <ArrowIcon />
            </AttackSection>
          </AttackSection>
          <AttackSection className="gap_display"></AttackSection>
          <AttackSection style={"child"}>
            <NormalIcon />
            <InfoText fonts={"lg"}>Back to Normal</InfoText>
          </AttackSection>
        </AttackSection>
      </Container>
    </>
  );
};
