import React from "react";
import { Box, Text, Image, Button, IconButton } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
const bride =
  "https://i.pinimg.com/originals/65/8d/70/658d705985f2f7a3ce08d1a2349dec5f.png";
const man = "/image/man.jpg";
const girl = "/image/girl.jpg";

export default function ProfileBride() {
  const instagram = (username) => {
    window.open(`https://www.instagram.com/${username}/`, "_blank").focus();
  };
  return (
    <Box sx={style.wrapper}>
      <Text sx={style.title}>The Bride & Groom</Text>
      <Box sx={style.wrapperContent}>
        <Box sx={style.person} >
          <Image
            src={girl}
            alt="Dan Abramov"
            height="300px"
            width="200px"
            objectFit="cover"
            sx={{
              borderRadius: "0 40px",
              boxShadow: "10px -10px 0px 0px rgb(0 0 0 / 30%)",
            }}
            data-aos="fade-down"
          />
          <Text sx={style.namePerson} data-aos="zoom-in">Fanni Citra Fadillah</Text>
          <Text sx={{ fontSize: "14px" }} data-aos="fade-up">
            Putri pertama dari <br /> Bpk Fajar Asananto <br /> & Ibu Indarwati
          </Text>
          <Button
            colorScheme="whiteAlpha"
            variant="outline"
            aria-label="Search database"
            size="sm"
            leftIcon={<Icon icon="akar-icons:instagram-fill" color="white" />}
            sx={{ mt: "20px" }}
            onClick={() => instagram("fannicitra")}
            data-aos="fade-up"
          >
            fannicitra
          </Button>
        </Box>

        <Text sx={{ fontSize: "70px", my: "30px" }}>&</Text>
        <Box sx={style.person} >
          <Image
            src={man}
            alt="Dan Abramov"
            height="300px"
            width="200px"
            objectFit="cover"
            sx={{
              borderRadius: "0 40px",
              boxShadow: "10px -10px 0px 0px rgb(0 0 0 / 30%)",
            }}
            data-aos="fade-down"
          />
          <Text sx={style.namePerson} data-aos="zoom-in">Dimas Fauzi</Text>
            
          <Text sx={{ fontSize: "14px" }} data-aos="fade-up" >
            Putra kedua dari <br /> Bpk Sudibyo <br /> & Ibu Winarsih Sumantri
          </Text>
          <Button
            colorScheme="whiteAlpha"
            variant="outline"
            aria-label="Search database"
            size="sm"
            leftIcon={<Icon icon="akar-icons:instagram-fill" color="white" />}
            sx={{ mt: "20px" }}
            onClick={() => instagram("dimas_fzi")}
            data-aos="fade-up"
          >
            dimas_fzi
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

const style = {
  wrapper: {
    p: "20px",
    bgColor: "gray.600",
    color: "#cecece",
  },
  title: {
    fontWeight: "700",
    fontSize: "20px",
    textTransform: "uppercase",
    textAlign: "center",
    position: "relative",
  },
  wrapperContent: {
    padding: "50px 30px",
    display: "flex",
    flexDirection: ["column", "column", "row"],
    justifyContent: "space-around",
    alignItems: "center",
  },
  pengantent: {
    width: "20px",
    height: "50px",
  },
  person: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: 300,
    textAlign: "center",
  },
  namePerson: {
    fontSize: 22,
    textAlign: "center",
    fontWeight: "500",
    textTransform: "uppercase",
    my: "10px",
  },
};
