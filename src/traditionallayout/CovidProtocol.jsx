import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

export default function Covid() {
  const image = [1, 2, 3, 4, 5];
  return (
    <Box sx={style.wrapper}>
      <Text
        sx={{ fontWeight: "700", fontSize: ["30px", "40px"] }}
        data-aos="fade-up"
      >
        COVID-19 Protocols
      </Text>

      <Box sx={style.wrapper}>
        {image.map((val) => (
          <Image
            data-aos="fade-up"
            key={val}
            src={`/image/protocol-0${val}.png`}
            width={["200px", "300px"]}
            height="auto"
          />
        ))}
      </Box>
    </Box>
  );
}

const style = {
  wrapper: {
    p: "20px",
    bgColor: "gray.300",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
    textAlign: "center",
  },
};
