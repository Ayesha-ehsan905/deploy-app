import { Box } from "../../../components/Box";
import { Text } from "../../../components/Text";
import { Image } from "../../../components/Image";
import { styled } from "../../../theming/darkTheme";
import line from "../../../assets/lineUp.png";
import line1 from "../../../assets/lineDown.png";
const ContentSection = styled(Box, {
  variants: {
    content: {
      parent: {
        mt: "60px",
        display: "flex",
        flexDirection: "row",
        width: "100%",
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
        // display: "flex",
        width: "50%",
        flex: "none",
        justifyContent: "center",
        m: "30px auto",
        textAlign: "center",
        backgroundColor: "white",
        height: "71px",
        br: "12px",
        bg: "rgba(255, 255, 255, 0.1)",
        mt: "60px",
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
        m: "60px auto",
        display: "flex",
        flexDirection: "row",
        width: "100%",
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
        m: "60px auto",
        width: "100%",
      },
      childlines: {
        width: "23%",
        position: "absolute",
        left: "23%",
        m: "23px auto",
        border: "1px dashed #828282",
        "@bp0": {
          display: "none",
        },
      },
      childline: {
        width: "23%",
        position: "absolute",
        left: "53%",
        m: "22px auto",
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
        width: "50px",
        "@bp0": {
          width: "7%",
        },
      },
      box: {
        width: "70%",
        "@bp0": {
          ml: "30px",
          width: "90%",
          mt: "20px",
        },
      },
      icon: {
        width: "50px",
        height: "50px",
        p: "5px",
        m: "30px",
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
        width: "90%",
        justifyContent: "space-between",
        "@bp0": {
          flexDirection: "column",
          width: "100%",
        },
      },
      child: {
        flex: "none",
        display: "flex",
        flexDirection: "column",
        width: "50%",
        mr: "30px",
        justifyContent: "space-between",
        "@bp0": {
          width: "80%",
        },
      },
      box: {
        boxSizing: "border-box",
        linearGradient:
          "153.32deg, rgba(255, 255, 255, 0.3) -65.62%, rgba(255, 255, 255, 0.1) 83.28%",

        boxShadow: "0px 4px 24px -1px rgba(0, 0, 0, 0.32)",
        backdropFilter: "blur(50px)",
        br: "12px",
        mt: "30px",
        display: "flex",
        flexDirection: "row",
        width: "100%",
        "@bp0": {
          flexDirection: "Column",
        },
      },
    },
  },
  "&.gird": {
    display: "grid",
    gridTemplateColumns: "auto auto",
    fontSize: "30px",
    rowGap: "20px",
    columnGap: "20px",
    "@bp0": {
      gridTemplate: "none",
    },

    "@bp2": {
      gridTemplate: "none",
    },
  },

  "&.content_box": {
    boxSizing: "border-box",
    linearGradient:
      "153.32deg, rgba(255, 255, 255, 0.3) -65.62%, rgba(255, 255, 255, 0.1) 83.28%",

    boxShadow: "0px 4px 24px -1px rgba(0, 0, 0, 0.32)",
    backdropFilter: "blur(50px)",
    br: "12px",
    mt: "30px",
    display: "grid",
    gridTemplateColumns: "auto auto",
    // width: "100%",
  },
  ".imageflex": {
    flex: 1,
  },
  ".contentflex": {
    flex: 2,
    m: "0 10px",
    display: "flex",
    flexDirection: "column",
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
        m: "60px auto",
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
        ft: "18px",
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
        ft: "16px",
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
      lg: {
        color: "$white",
        fontFamily: "$sans",
        lineHeight: "24px",
        ft: "16px",
        fontWeight: "$Bold",
        mt: "0px",
      },
    },
  },
});

const Footer = styled(Box, {
  variants: {
    style: {
      parent: {
        paddingTop: "80px",
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
        justifyContent: "flex-start",

        "@bp0": {
          ml: "30px",
          flexDirection: "column",
          width: "75%",
        },
      },

      childs: {
        alignItems: "start",
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
  // width: "40%",
  "@bp0": {
    width: "95%",
  },
});
const AttackSection = styled(Box, {
  variants: {
    style: {
      parent: {
        textAlign: "center",
        ft: "30px",
        display: "grid",
        columnGap: "60px",
        rowGap: "60px",
        gridTemplateColumns: " 1fr 1fr 1fr",

        ml: "60px",
        "@bp0": {
          gridTemplate: "none",
          columnGap: "60px",
          rowGap: "60px",
        },
      },
      child: {
        linearGradient:
          "153.32deg, rgba(255, 255, 255, 0.3) -65.62%, rgba(255, 255, 255, 0.1) 83.28%",
        boxSizing: "border-box",
        boxShadow: "0px 4px 24px -1px rgba(0, 0, 0, 0.32)",
        backdropFilter: "blur(50px)",
        br: "12px",
        width: "80%",
        height: "100%",
      },
    },

    font: {
      parent: {
        width: "100%",
        m: "60px auto",
      },
    },
  },

  ".arrow_Style": {
    position: "absolute",
    display: "inline",
  },
  ".arrow_Styles": {
    position: "absolute",
    display: "inline",
    "@bp1": {
      display: "none",
    },
  },
  ".gap_display": {
    "@bp0": {
      display: "none",
    },
  },
  ".teams_style": {
    linearGradient:
      "153.32deg, rgba(255, 255, 255, 0.3) -65.62%, rgba(255, 255, 255, 0.1) 83.28%",
    boxSizing: "border-box",
    boxShadow: "0px 4px 24px -1px rgba(0, 0, 0, 0.32)",
    backdropFilter: "blur(50px)",
    br: "12px",
    width: "80%",
    height: "100%",
    "&::before": {
      backgroundImage: `url(${line})`,
      content: "",
      position: "absolute",
      width: "396px",
      top: "-225px",
      height: "187px",
      "@bp2": {
        display: "none",
      },
    },
    "&:after": {
      content: "",
      backgroundImage: `url(${line1})`,

      position: "absolute",
      width: "415px",
      top: "140px",
      height: "230px",
      right: "95px",
      "@bp2": {
        display: "none",
      },
    },
  },
  ".arrow_styles": {
    position: "absolute",
    display: "inline",
    "@bp3": {
      mt: "16%",
    },
  },
  "&.heading": {
    textAlign: "center",
    fontSize: "32px",
    fontWeight: "$Bold",
    margin: "60px auto",
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
  AttackSection,
};
