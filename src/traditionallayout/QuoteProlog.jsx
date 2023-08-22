import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

export default function QuoteProlog() {
  return (
    <Box>
      {/* Quote prolog  */}
      <Box sx={style.wrapper}>
        <Box sx={style.quote}>
          <Icon icon="ci:mail-open" color="#cecece" width="60" />
          <div data-aos="fade-up" data-aos-duration="300">
            <Text>
              “And of His signs is that He created for you from yourselves mates
              that you may find tranquillity in them; and He placed between you
              affection and mercy. Indeed in that are signs for a people who
              give thought.”
            </Text>
            <Text>( QS. Ar- Rum 21 )</Text>
          </div>
        </Box>

        <div data-aos="fade-up">
          <Box
            sx={{
              marginBottom: "50px",
              p: "20px",
              color: "#000",
              textAlign: "center",
            }}
          >
            <Box
              sx={style.imgPreview}
              as="img"
              src="/image/2.jpg"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="500"
            />
            <Text data-aos="fade-down" >
              “Happy marriages begin when we marry the ones we love, and they
              blossom when we love the ones we marry.”
            </Text>
          </Box>
        </div>
      </Box>
      {/* STORY TELLING  */}
      {/* <Box
        sx={{
          bgColor: "#626052",
          marginBottom: "50px",
          p: "20px",
          color: "#000",
          textAlign: "center",
        }}
      ></Box> */}
    </Box>
  );
}

const style = {
  wrapper: {
    minHeight: "200px",
  },
  quote: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    margin: "auto",
    marginTop: "-90px",
    minHeight: "150px",
    color: "font.gray",
    width: "85%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    padding: "20px",
    gap: "20px",
  },
  imgPreview: {
    height: [300, 400, 600],
    margin: "auto",
    width: "80%",
    maxWidth: "1080px",
    objectFit: "cover",
    backgroundSize: "cover",
    backgroundPosition: "50%",
    backgroundRepeat: "no-repeat",
    borderRadius: "50px 0 0 0 ",
    boxShadow: "10px 10px 0px 0px rgb(0 0 0 / 30%)",
    marginBottom: "50px",
  },
  imgStory: {
    height: [200, 300, 500],
    margin: "auto",
    mt: "30px",
    width: "80%",
    maxWidth: "1080px",
    objectFit: "cover",
    backgroundSize: "cover",
    backgroundPosition: "50%",
    backgroundRepeat: "no-repeat",
    borderRadius: "10px",
    marginBottom: "50px",
  },
};
