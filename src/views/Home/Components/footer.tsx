import pic2 from "../../../assets/2.png";
import { Image } from "../../../components/Image";
import { Text } from "../../../components/Text";
import logo from "../../../assets/logo.png";
import pic from "../../../assets/warranty.png";
import { Footer } from "./homeStyle";
export default () => {
  return (
    <>
      <Footer style={"parent"}>
        <Footer style={"child"} css={{ mt: "4%" }}>
          <Image src={logo} size={"xs"} />
          <Image src={pic} size={"xss"} />
        </Footer>

        <Footer style={"childs"}>
          <Footer style={"child"}>
            <Text css={{ color: "white" }}>Quick Links</Text>
            <Text css={{ color: "white" }}>Home</Text>
            <Text css={{ color: "white" }}>About</Text>
          </Footer>
          <Footer style={"child"}>
            <Text css={{ color: "white" }}>Socials</Text>
            <Text css={{ color: "white" }}>LinkedIn</Text>
            <Text css={{ color: "white" }}>Twitter</Text>
          </Footer>
        </Footer>
        <Footer
          style={"child"}
          css={{
            ml: "60px",
            mt: "4%",
            "@bp0": { ml: "90px" },
          }}
        >
          <Text css={{ color: "white" }}>Contact Us</Text>
          <Text css={{ color: "white" }}>Contact@dlt.alerts</Text>
          <Text css={{ color: "white" }}>
            Xilliams Corner Wine © 2017. 1112 A Market St # Ste B22,
            Charlottesville, CA 45565
          </Text>
          <Text css={{ color: "white" }}>+1 3243 3423 3232</Text>
        </Footer>
      </Footer>
    </>
  );
};
