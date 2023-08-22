import React from "react";
import { Box, Image } from "@chakra-ui/react";

const image = [
  1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
export default function Galery() {
  return (
    <Box sx={style.wrapper}>
      <Box sx={style.galeryFlex}>
        {image.map((val) => (
          <Box sx={style.imageBox} key={val} data-aos="fade-up">
            <Image sx={style.image} src={`/image/${val}.jpg`} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

const style = {
  wrapper: {
    bgColor: "gray.900",
    paddingY: "20px",
  },
  galeryFlex: {
    display: "flex",
    overflow: "hidden",
    flexWrap: "wrap",
    margin: "0 -2.5px",
    padding: "2.5px 0",
  },
  imageBox: {
    position: "relative",
    display: "block",
    height: ["150px", "150px", "300px"],
    margin: "2.5px",
    flexGrow: 1,
  },
  image: {
    height: ["150px", "150px", "300px"],
    objectFit: "cover",
    maxWidth: "100%",
    minWidth: "100%",
    verticalAlign: "bottom",
  },
};
