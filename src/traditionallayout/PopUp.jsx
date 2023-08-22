import React from "react";
import { Box, Slide, Text, Button, Divider } from "@chakra-ui/react";

const image = {
  md: "/image/cover.jpg",
  xl: "/image/cover.jpg",
};
const imageXl = `linear-gradient(180deg,rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.8) 100%),url(${image.xl})`;
const imageMd = `linear-gradient(180deg,rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.8) 100%),url(${image.md})`;

export default function PopUp({ handleOpen, name }) {
  const [positionPopUp, setPositionPopUp] = React.useState("100vh");
  const [height, setHeight] = React.useState(window.innerHeight);

  React.useEffect(() => {
    function handleResize() {
      setHeight(window.innerHeight);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const open = () => {
    handleOpen();
    const musicBg = document.getElementById("music-bg");
    musicBg.play();
    setPositionPopUp(-100);
  };

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          width: "100%",
          top: "0px",
          left: "0px",
          right: "0px",
          zIndex: 99999,
          transform: `translateX(0px) translateY(${positionPopUp}%) translateZ(0px)`,
          transition: "transform 500ms ease-in-out",
        }}
      >
        <Box
          as="header"
          sx={{
            ...style.wrapper,
            height: height,
            backgroundImage: [imageMd, imageMd, imageXl],
          }}
        >
          <Box color="#fff" data-aos="fade-down">
            <Text fontSize="4xl" lineHeight="10" fontWeight="bold" textTransform="uppercase">
            We'll <br />  get married
            </Text>
          </Box>
          <Box color="#fff" data-aos="zoom-in">
            <Text fontSize="12">To:</Text>
            <Text>{name}</Text>
            <Divider />
          </Box>
          <div data-aos="fade-up">
            <Button onClick={() => open()} colorScheme="whiteAlpha">
              Let's Start Our Journey
            </Button>
          </div>
        </Box>
      </Box>
    </>
  );
}

const style = {
  wrapper: {
    widht: "100%",
    backgroundImage: "",
    top: "0px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "end",
    padding: "20px",
    paddingBottom: "90px",
    textAlign: "center",
    gap: "20px",
  },
};
