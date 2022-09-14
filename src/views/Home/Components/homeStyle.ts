import { Box } from "../../../components/Box";
import { Text } from "../../../components/Text";
import { Image } from "../../../components/Image";
import { styled } from "../../../theming/darkTheme";

const ContentSection = styled(Box, {
  variants: {
    content: {
      parent: {
        mt: "50px",
        display: "flex",
        flexDirection: "row",
        width: "100%",
        // ml: "30px",
        ml: "60px",
        "@bp0": {
          flexDirection: "column",
        },
      },
      childContent: {
        width: "50%",
        "@bp0": {
          width: "80%",
        },
      },
      childImage: {
        width: "50%",
        ml: "60px",
        "@bp0": {
          width: "80%",
          mr: "10px",
          ml: "0px",
        },
      },
    },
  },
});

const InputSection = styled(Box, {
  variants: {
    style: {
      parent: {
        display: "flex",
        width: "100%",
        flex: "none",
        justifyContent: "center",
        textAlign: "center",
        "@bp0": {
          textAlign: "left",
          ml: "30px",
        },
      },
      child: {
        padding: "5px",
        width: "40%",
        justifyContent: "center",
        // linearGradient:
        //   " 90.18deg, rgba(50, 56, 91, 0.57) 0%, rgba(26, 31, 65, 0.57) 100%",
      },
    },
  },
});

const HeroSection = styled(Box, {
  variants: {
    style: {
      parent: {
        mt: "60px",
        display: "flex",
        flexDirection: "row",
        width: "100%",
        ml: "60px",
        "@bp0": {
          flexDirection: "column",
        },
      },
      childcontent: {
        width: "50%",
        "@bp0": {
          width: "80%",
        },
      },
      childimage: {
        width: "50%",
        ml: "60px",
        "@bp0": {
          width: "80%",
          mr: "30px",
        },
      },
    },
  },
});

const StepSectionHeading = styled(Box, {
  variants: {
    style: {
      parent: {
        width: "100%",
      },
      childlines: {
        width: "29%",
        position: "absolute",
        left: "19%",
        mt: "20px",
        border: "1px dashed #828282",
        "@bp0": {
          display: "none",
        },
      },
      childline: {
        width: "29%",
        position: "absolute",
        left: "52%",
        mt: "20px",
        border: "1px dashed #828282",
        "@bp0": {
          display: "none",
        },
      },
    },
  },
});
const StepSection = styled(Box, {
  variants: {
    style: {
      parent: {
        width: "100%",
        display: "flex",
        flexDirection: "row",

        justifyContent: "space-between",
        alignItems: "center",

        "@bp0": {
          flexDirection: "column",
        },
      },
      rounded: {
        boxSizing: "border-box",
        linearGradient:
          "153.32deg, rgba(255, 255, 255, 0.3) -65.62%, rgba(255, 255, 255, 0.1) 83.28%",

        boxShadow: "0px 4px 24px -1px rgba(0, 0, 0, 0.32)",
        backdropFilter: "blur(50px)",
        br: "12px",
      },
    },
    childstyle: {
      parent: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        width: "100%",
        flexDirection: "column",
        "@bp0": {
          mt: "30px",
        },
      },
      line: {
        border: "1px solid #828282",
        transform: " rotate(-90deg)",
        width: "40px",
        mt: "20px",
      },
      circle: {
        flex: "none",
        linearGradient:
          " 153.32deg, #B79313 -65.62%, rgba(233, 209, 107, 0.1) 83.28%",
        br: "50%",
        height: "50px",
        width: "10%",
        "@bp0": {
          width: "7%",
        },
      },
      box: {
        width: "70%",
        ml: "30px",
        mr: "30px",
        "@bp0": {
          ml: "30px",
          width: "90%",
          mt: "20px",
        },
      },
      icon: {
        width: "50px",
        height: "50px",
        ml: "30px",
        mt: "20px",
        br: "6px",
        linearGradient:
          "153.32deg, rgba(255, 255, 255, 0.3) -65.62%, rgba(255, 255, 255, 0.1) 83.28%",
      },
    },
  },
});

const InfoSection = styled(Box, {
  variants: {
    style: {
      parent: {
        width: "100%",
        mt: "60px",
      },
    },
  },
});
const InfoSectionContent = styled(Box, {
  variants: {
    style: {
      parent: {
        display: "flex",
        flexDirection: "row",
        width: "50%",
        flex: "none",
        mt: "20px",
        // ml: "40px",
        "@bp0": {
          flexDirection: "column",
          width: "100%",
        },
      },
      child: {
        flex: "none",
        display: "flex",
        flexDirection: "column",
        width: "87%",
        ml: "30px",
        "@bp0": {
          width: "70%",
        },
      },
      box: {
        flex: "none",
        height: "30%",
        boxSizing: "border-box",
        linearGradient:
          "153.32deg, rgba(255, 255, 255, 0.3) -65.62%, rgba(255, 255, 255, 0.1) 83.28%",

        boxShadow: "0px 4px 24px -1px rgba(0, 0, 0, 0.32)",
        backdropFilter: "blur(50px)",
        br: "12px",
        ml: "40px",
        mr: "40px",
        mt: "30px",
        display: "flex",
        flexDirection: "row",
        width: "100%",
        "@bp0": {
          flexDirection: "Column",
        },
      },
      content: {},
    },
  },
});

const ConnectSection = styled(Box, {
  variants: {
    style: {
      sm: {
        width: "90%",
        ml: "60px",
        mr: "10px",
        linearGradient:
          "153.32deg, rgba(255, 255, 255, 0.3) -65.62%, rgba(255, 255, 255, 0.1) 83.28%",
        boxSizing: "border-box",
        boxShadow: "0px 4px 24px -1px rgba(0, 0, 0, 0.32)",
        backdropFilter: "blur(50px)",
        br: "12px",
        mt: "50px",
        height: "55%",
        pb: "5%",
        mb: "10%",
        "@bp0": {
          height: "50%",
          width: "80%",
          mr: "40px",
          pb: "10%",
          mb: "50%",
        },
      },
    },
  },
});
const InfoText = styled(Text, {
  variants: {
    fonts: {
      h1: {
        // fontFamily: "$sans",
        ft: "100%",
        lineHeight: "27px",
        fontWeight: "$Bold",
        color: "$white",
        mr: "20px",
        "@bp0": {
          mr: "20px",
          ml: "20px",
        },
      },
      p: {
        ft: "80%",
        color: "$muted",
        lineHeight: "18px",
        // fontfamily: "$Inter",
        "@bp0": {
          mr: "20px",
          ml: "20px",
        },
      },
      sm: {
        textAlign: "center",
        fontFamily: "$sans",
        lineHeight: "48px",
        fontWeight: "$Bold",
        alignContent: "center",
        ft: "32px",
        pt: "80px",
        color: "$white",
      },
      md: {
        color: "$white",
        textAlign: "center",
        fontFamily: "$sans",
        lineHeight: "34px",
        fontWeight: "$small",
        alignContent: "center",
        ft: "24px",
        width: "61%",
        pl: "23%",
        pr: " 23%",
        pt: "1%",
      },
    },
  },
});

const Footer = styled(Box, {
  height: "50%",

  variants: {
    style: {
      parent: {
        bg: "black",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        "@bp0": {
          flexDirection: "column",
        },
        // bg: "$bg_dark_div",
      },
      child: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        mt: "2%",
        mr: "3%",
        "@bp0": {
          ml: "30px",
          flexDirection: "column",
          width: "75%",
        },
      },
      childs: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        "@bp0": {
          ml: "60px",
        },
      },
    },
  },
});
const ImageSection = styled(Image, {
  m: "10px",
  width: "40%",
  "@bp0": {
    width: "95%",
    height: "150px",
  },
});
export {
  ContentSection,
  HeroSection,
  InputSection,
  StepSection,
  StepSectionHeading,
  InfoSection,
  InfoSectionContent,
  ConnectSection,
  InfoText,
  Footer,
  ImageSection,
};
