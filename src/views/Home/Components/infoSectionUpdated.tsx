import { Text } from "../../../components/Text";
import {
  InfoSection,
  InfoSectionContent,
  InfoText,
  ImageSection,
} from "./homeStyle";
import pic1 from "../../../assets/Rectangle 307.png";
import pic2 from "../../../assets/Rectangle 321.png";
import pic3 from "../../../assets/Rectangle 324.png";
import pic4 from "../../../assets/Rectangle 325.png";
import pic5 from "../../../assets/Rectangle 328.png";
import pic6 from "../../../assets/Rectangle 329.png";
import { Box, Container } from "../../../components/Box";
export default () => {
  return (
    <>
      <Container>
        <InfoSection as="div" style={"parent"} css={{ m: "60px auto" }}>
          {/* 6th div heading */}
          <Text
            fonts={"sans"}
            color={"white"}
            as="h1"
            Size={"md"}
            css={{
              textAlign: "center",
              mt: "100px",
            }}
          >
            Our Trusted Network
          </Text>
        </InfoSection>
        <InfoSectionContent className="gird">
          {/* "1" */}
          <InfoSectionContent className="content_box">
            <InfoSectionContent className="imageflex">
              <ImageSection src={pic1} />
            </InfoSectionContent>
            <InfoSectionContent className="contentflex">
              <InfoText fonts={"h1"}>
                Blockchain Oracles for Hybrid Smart Contracts | Chainlink
              </InfoText>

              <InfoText fonts={"p"}>
                Chainlink is the most widely used oracle network for powering
                hybrid smart contracts, enabling any blockchain to securely
                access off-ch...
              </InfoText>
              <InfoText fonts={"p"}>chain.link</InfoText>
            </InfoSectionContent>
          </InfoSectionContent>
          {/* 2nd */}
          <InfoSectionContent className="content_box">
            <InfoSectionContent className="imageflex">
              <ImageSection src={pic2} />
            </InfoSectionContent>
            <InfoSectionContent className="contentflex">
              <InfoText fonts={"h1"}>
                SentinelOne | Autonomous AI Endpoint Security Platform | s1.ai
              </InfoText>
              <InfoText fonts={"p"}>
                Endpoint security software that defends every endpoint against
                every type of attack, at every stage in the threat lifecycle
              </InfoText>
              <InfoText fonts={"p"}>SENTINELONE.COM</InfoText>
            </InfoSectionContent>
          </InfoSectionContent>
          {/* 3rd */}
          <InfoSectionContent className="content_box">
            <InfoSectionContent className="imageflex">
              <ImageSection src={pic3} />
            </InfoSectionContent>
            <InfoSectionContent className="contentflex">
              <InfoText fonts={"h1"}>
                MISP Open Source Threat Intelligence Platform &amp; Open
                Standards For....
              </InfoText>

              <InfoText fonts={"p"}>
                MISP Open Source Threat Intelligence Platform &amp; Open
                Standards For Threat Information Sharing - MISP Project
              </InfoText>
              <InfoText fonts={"p"}>MISP-PROJECT.ORG</InfoText>
            </InfoSectionContent>
          </InfoSectionContent>
          {/* 4th */}
          <InfoSectionContent className="content_box">
            <InfoSectionContent className="imageflex">
              <ImageSection src={pic4} />
            </InfoSectionContent>
            <InfoSectionContent className="contentflex">
              <InfoText fonts={"h1"}>
                Avalanche: Blazingly Fast, Low Cost, & Eco-Friendly | Dapps
                Platform
              </InfoText>
              <InfoText fonts={"p"}>
                Institutions, Enterprises, and Governments. Avalanche is the
                best verifiable platform for institutions, enterprises, and
                governm....
              </InfoText>
              <InfoText fonts={"p"}>AVAX.NETWORK</InfoText>
            </InfoSectionContent>
          </InfoSectionContent>
          {/* 5h */}
          <InfoSectionContent className="content_box">
            <InfoSectionContent className="imageflex">
              <ImageSection src={pic5} />
            </InfoSectionContent>
            <InfoSectionContent className="contentflex">
              <InfoText fonts={"h1"}>
                MSP + IT Management Software: RMM, Backup, Security - N-able
              </InfoText>

              <InfoText fonts={"p"}>
                Software, resources, and tools for MSPs and IT departments with
                best-in-class Remote Monitoring & Management, Data Protectio...
              </InfoText>
              <InfoText fonts={"p"}>n-able.com</InfoText>
            </InfoSectionContent>
          </InfoSectionContent>
          {/* 6th */}
          <InfoSectionContent className="content_box">
            <InfoSectionContent className="imageflex">
              <ImageSection src={pic6} />
            </InfoSectionContent>
            <InfoSectionContent className="contentflex">
              <InfoText fonts={"h1"}>
                The future of cybersecurity is Cybersecurity as a Service
              </InfoText>

              <InfoText fonts={"p"}>
                Centralized security management and operations from the world’s
                most trusted and scalable cloud security platform. With ....
              </InfoText>
              <InfoText fonts={"p"}>sophos.com</InfoText>
            </InfoSectionContent>
          </InfoSectionContent>
        </InfoSectionContent>
      </Container>
    </>
  );
};
