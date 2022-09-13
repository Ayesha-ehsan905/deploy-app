import { Image } from "../../../components/Image";
import { Text } from "../../../components/Text";
import { InfoSection, InfoSectionContent, InfoText } from "./homeStyle";
import pic1 from "../../../assets/Rectangle 307.png";
import pic2 from "../../../assets/Rectangle 321.png";
import pic3 from "../../../assets/Rectangle 324.png";
import pic4 from "../../../assets/Rectangle 325.png";
import pic5 from "../../../assets/Rectangle 328.png";
import pic6 from "../../../assets/Rectangle 329.png";
export default () => {
  return (
    <>
      <InfoSection as="div" style={"parent"}>
        {/* 6th div heading */}
        <Text
          fonts={"sans"}
          color={"white"}
          as="h1"
          css={{
            textAlign: "center",
            ft: "32px",
          }}
        >
          Our Trusted Network
        </Text>
      </InfoSection>
      {/* 1st */}
      <InfoSectionContent style={"parent"}>
        <InfoSectionContent style={"child"}>
          <InfoSectionContent
            css={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
            }}
          >
            <Image
              src={pic1}
              css={{ m: "10px", height: "40%", width: "40%" }}
            />
            <InfoSection
              css={{ display: "flex", flexDirection: "column", width: "40%" }}
            >
              <InfoText fonts={"h1"}>
                Blockchain Oracles for Hybrid Smart Contracts | Chainlink
              </InfoText>
              <InfoText fonts={"p"}>
                Chainlink is the most widely used oracle network for powering
                hybrid smart contracts, enabling any blockchain to securely
                access off-ch...
              </InfoText>
              <InfoText fonts={"p"}>chain.link</InfoText>/
            </InfoSection>
          </InfoSectionContent>
        </InfoSectionContent>
        <InfoSectionContent style={"child"}>
          <InfoSectionContent
            css={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
            }}
          >
            <Image
              src={pic2}
              css={{ m: "10px", width: "40%", height: "40%" }}
            />
            <InfoSection
              css={{ display: "flex", flexDirection: "column", width: "40%" }}
            >
              <InfoText fonts={"h1"}>
                SentinelOne | Autonomous AI Endpoint Security Platform | s1.ai
              </InfoText>

              <InfoText fonts={"p"}>
                Endpoint security software that defends every endpoint against
                every type of attack, at every stage in the threat lifecycle
              </InfoText>
              <InfoText fonts={"p"}>SENTINELONE.COM</InfoText>
            </InfoSection>
          </InfoSectionContent>
        </InfoSectionContent>
      </InfoSectionContent>

      {/* 2nd */}

      <InfoSectionContent style={"parent"}>
        <InfoSectionContent style={"child"}>
          <InfoSectionContent
            css={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Image
              src={pic3}
              css={{ m: "10px", width: "40%", height: "40%" }}
            />
            <InfoSection
              css={{ display: "flex", flexDirection: "column", width: "40%" }}
            >
              <InfoText fonts={"h1"}>
                MISP Open Source Threat Intelligence Platform &amp; Open
                Standards For....
              </InfoText>

              <InfoText fonts={"p"}>
                MISP Open Source Threat Intelligence Platform &amp; Open
                Standards For Threat Information Sharing - MISP Project
              </InfoText>
              {/* <InfoText fonts={"p"}>MISP-PROJECT.ORG</InfoText> */}
            </InfoSection>
          </InfoSectionContent>
        </InfoSectionContent>
        <InfoSectionContent style={"child"}>
          <InfoSectionContent
            css={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Image
              src={pic4}
              css={{ m: "10px", width: "40%", height: "40%" }}
            />
            <InfoSection
              css={{ display: "flex", flexDirection: "column", width: "40%" }}
            >
              <InfoText fonts={"h1"}>
                Avalanche: Blazingly Fast, Low Cost, & Eco-Friendly | Dapps
                Platform
              </InfoText>

              <InfoText fonts={"p"}>
                Institutions, Enterprises, and Governments. Avalanche is the
                best verifiable platform for institutions, enterprises, and
                governm....
              </InfoText>
              {/* <InfoText fonts={"p"}>AVAX.NETWORK</InfoText> */}
            </InfoSection>
          </InfoSectionContent>
        </InfoSectionContent>
      </InfoSectionContent>

      {/* 3rd */}

      <InfoSectionContent style={"parent"}>
        <InfoSectionContent style={"child"}>
          <InfoSectionContent
            css={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
            }}
          >
            <Image
              src={pic5}
              css={{ m: "10px", width: "40%", height: "40%" }}
            />
            <InfoSection
              css={{ display: "flex", flexDirection: "column", width: "40%" }}
            >
              <InfoText fonts={"h1"}>
                MSP + IT Management Software: RMM, Backup, Security - N-able
              </InfoText>

              <InfoText fonts={"p"}>
                Software, resources, and tools for MSPs and IT departments with
                best-in-class Remote Monitoring & Management, Data Protectio...
              </InfoText>
              {/* <InfoText fonts={"p"}>n-able.com</InfoText> */}
            </InfoSection>
          </InfoSectionContent>
        </InfoSectionContent>
        <InfoSectionContent style={"child"}>
          <InfoSectionContent
            css={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Image
              src={pic6}
              css={{ m: "10px", width: "40%", height: "40%" }}
            />
            <InfoSection
              css={{ display: "flex", flexDirection: "column", width: "40%" }}
            >
              <InfoText fonts={"h1"}>
                The future of cybersecurity is Cybersecurity as a Service
              </InfoText>

              <InfoText fonts={"p"}>
                Centralized security management and operations from the world’s
                most trusted and scalable cloud security platform. With ....
              </InfoText>
              {/* <InfoText fonts={"p"}>sophos.com</InfoText> */}
            </InfoSection>
          </InfoSectionContent>
        </InfoSectionContent>
      </InfoSectionContent>
    </>
  );
};
