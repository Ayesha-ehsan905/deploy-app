import { Text } from "../../../components/Text";
import Integrate from "../../../icons/integrate";
import Remediate from "../../../icons/Remediate";
import Validate from "../../../icons/validate";
import { StepSection, StepSectionHeading } from "./homeStyle";

import { Container } from "../../../components/Box";
export default () => {
  return (
    <>
      <Container>
        <StepSectionHeading as="div" style={"parent"}>
          <Text
            fonts={"sans"}
            color={"white"}
            as="h1"
            css={{
              textAlign: "center",
              ft: "32px",
              fontWeight: "$Bold",
              m: "60px auto",
            }}
          >
            Cyber Coverage in 3 Setps
          </Text>
        </StepSectionHeading>
        {/* dotted line */}
        <StepSectionHeading style={"childlines"}></StepSectionHeading>
        <StepSectionHeading style={"childline"}></StepSectionHeading>

        <StepSection style={"parent"}>
          {/* 1stchild */}
          <StepSection childstyle={"parent"} as="div">
            <StepSection childstyle={"circle"}>
              <Text
                css={{
                  ft: "32px",
                  mt: "0px",
                  color: "$white",
                  textAlign: "center",
                }}
              >
                1
              </Text>
            </StepSection>

            <StepSection childstyle={"line"}></StepSection>
            <StepSection style={"rounded"} childstyle={"box"}>
              <StepSection childstyle={"icon"}>
                <Integrate></Integrate>
              </StepSection>

              <Text
                color={"white"}
                as="h1"
                css={{
                  ft: "24px",
                  ml: "30px",
                  fontFamily: "$LexendDeca",
                  fontWeight: "$Bold",
                }}
              >
                Integrate
              </Text>
              <Text
                color={"muted"}
                css={{
                  ft: "16px",
                  ml: "30px",
                  mr: "20px",
                  fontFamily: "$inter",
                  fontWeight: "normal",
                }}
              >
                Active threat sharing with your coverage means your insurance is
                one unified solution.
              </Text>
            </StepSection>
          </StepSection>

          {/* 2nd child */}
          <StepSection childstyle={"parent"} as="div">
            <StepSection childstyle={"circle"}>
              <Text
                css={{
                  ft: "32px",
                  mt: "0px",
                  color: "$white",
                  textAlign: "center",
                }}
              >
                2
              </Text>
            </StepSection>
            <StepSection childstyle={"line"}></StepSection>
            <StepSection style={"rounded"} childstyle={"box"}>
              <StepSection childstyle={"icon"}>
                <Validate></Validate>
              </StepSection>

              <Text
                color={"white"}
                as="h1"
                css={{
                  ft: "24px",
                  ml: "30px",
                  fontFamily: "$LexendDeca",
                  fontWeight: "$Bold",
                }}
              >
                Validate
              </Text>
              <Text
                color={"muted"}
                css={{
                  ft: "16px",
                  ml: "30px",
                  mr: "20px",
                  fontFamily: "$inter",
                  fontWeight: "normal",
                }}
              >
                AI powered claims approvals let your teams know exactly where
                they stand, instantly
              </Text>
            </StepSection>
          </StepSection>
          {/* 3rd child */}
          <StepSection childstyle={"parent"} as="div">
            <StepSection childstyle={"circle"}>
              <Text
                css={{
                  ft: "32px",
                  mt: "0px",
                  color: "$white",
                  textAlign: "center",
                }}
              >
                3
              </Text>
            </StepSection>
            <StepSection childstyle={"line"}></StepSection>
            <StepSection style={"rounded"} childstyle={"box"}>
              <StepSection childstyle={"icon"}>
                <Remediate></Remediate>
              </StepSection>
              <Text
                fonts={"sans"}
                color={"white"}
                as="h1"
                css={{
                  ft: "24px",
                  ml: "30px",
                  fontFamily: "$LexendDeca",
                  fontWeight: "$Bold",
                }}
              >
                Remediate
              </Text>
              <Text
                color={"muted"}
                css={{
                  ft: "16px",
                  ml: "30px",
                  mr: "20px",
                  fontFamily: "$inter",
                  fontWeight: "normal",
                }}
              >
                Tamper proof incident and coverage summary enables IR teams to
                recover faster.
              </Text>
            </StepSection>
          </StepSection>
        </StepSection>
      </Container>
    </>
  );
};
