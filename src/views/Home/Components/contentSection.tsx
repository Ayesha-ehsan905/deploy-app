import { Text } from "../../../components/Text";
import { Image } from "../../../components/Image";
import pic1 from "../../../assets/1.png";
import { ContentSection } from "./homeStyle";
import React from "react";
export default () => {
  return (
    <>
      <ContentSection content={"parent"} as="div">
        {/* 1strow  Heading child Div*/}
        <ContentSection content={"childContent"} as="div">
          <Text fonts={"sans"} color={"white"} as="h1" css={{ ft: "32px" }}>
            Active Cyber Threats Require Better Insurance
          </Text>
          <Text color={"muted"} css={{ ft: "24px" }}>
            Integrated security and cyber insurance protect you from risks
            before they strike and enable faster recovery if they do
          </Text>
        </ContentSection>
        <ContentSection content={"childImage"} as="div">
          <Image src={pic1} size={"medium"} />
        </ContentSection>
      </ContentSection>
      ;
    </>
  );
};
