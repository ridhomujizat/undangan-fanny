import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";

export default function Header() {
  const [height, setHeight] = React.useState(window.innerHeight);
  React.useEffect(() => {
    function handleResize() {
      setHeight(window.innerHeight);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const image = {
    md: "/image/1.jpg",
    xl: "/image/1-lg.jpg",
  };
  const imageXl = `linear-gradient(180deg,rgba(7, 49, 143, 0.8); 0%,rgba(7, 49, 143, 0.8); 100%),url(${image.xl})`;
  const imageMd = `linear-gradient(180deg,rgba(7, 49, 143, 0.8); 0%,rgba(7, 49, 143, 0.8); 100%),url(${image.md})`;
  console.log();
  return (
    <Box
      as="header"
      sx={{
        ...style.navbar,
        height: height,
        backgroundImage: [imageMd, imageMd, imageXl],
      }}
    >
      <Text  data-aos="fade-up">THE WEDDING OF</Text>
      <Text fontSize="4xl" data-aos="fade-up">FANNI & DIMAS</Text>
      <Text data-aos="fade-up">September 25, 2022</Text>
    </Box>
  );
}

const style = {
  navbar: {
    widht: "100%",
    backgroundImage: "",
    top: "0px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top center",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "20px",
    paddingBottom: "130px",
    color: "#fff",
  },
};
