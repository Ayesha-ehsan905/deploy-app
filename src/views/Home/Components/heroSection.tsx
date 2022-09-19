import { Text } from "../../../components/Text";
import { Image } from "../../../components/Image";
import { HeroSection } from "./homeStyle";
import pic2 from "../../../assets/2.png";
import { Container } from "../../../components/Box";
export default () => {
  return (
    <>
      <Container>
        <HeroSection as="div" style={"parent"}>
          {/* 1strow  Heading child Div*/}
          <HeroSection as="div" style={"childcontent"}>
            <Text
              fonts={"sans"}
              color={"white"}
              as="h1"
              css={{ ft: "32px", fontWeight: "$Bold" }}
            >
              How we're better
            </Text>
            <Text color={"muted"} css={{ ft: "24px", fontWeight: "normal" }}>
              DLT Alert is the first active monitoring and self-validating cyber
              insurance company. Through direct integration with threat
              monitoring services, external incident validation sources, and the
              fastest block chain protocols DLT Alert approves claims in
              real-time improving customer payouts, remediation times, and
              lowering premiums. This means less risk and more uptime for our
              clients
            </Text>
          </HeroSection>
          <HeroSection as="div" style={"childimage"}>
            <Image src={pic2} size={"medium"} />
          </HeroSection>
        </HeroSection>
      </Container>
    </>
  );
};
