import React from "react";
import {
  Box,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Image,
  useToast,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";

const alamat =
  "Jl Penegak V No 30, RT 08 / RW 02, Kel. Palmeriam, Kec. Matraman, Jakarta Timur, 13140";
export default function Gift() {
  const toast = useToast();
  const [gift, setGift] = React.useState(false);
  const [money, setMoey] = React.useState(false);

  const copyButton = (text) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Success Copy",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <Box sx={style.wrapper}>
      <Text sx={{ fontSize: "20px", textAlign: "center", fontWeight: "500" }} data-aos="fade-up">
        Wedding Gift!
      </Text>
      <Text sx={{ fontSize: "14px", textAlign: "center", mt: "10px" }} data-aos="fade-up">
        It's a big honor to see you at our wedding ceremony.
        <br /> If you want to give some of your treasure, you can take a look at
        our account number.
        <br /> Thank you!
      </Text>
      <Box sx={{ maxWidth: "600px", width: "100%", mt: "20px" }}>
        <Box
          sx={{
            display: "flex",
            gap: "10px",
            justifyContent: "space-around",
            mt: "20px",
          }}
        >
          <Box sx={style.button} onClick={() => setGift(true)} data-aos="fade-right">
            <Icon
              icon="ant-design:gift-filled"
              color="white"
              width="30"
              height="30"
            />
          </Box>
          <Box sx={style.button} onClick={() => setMoey(true)} data-aos="fade-left">
            <Icon icon="entypo:wallet" color="white" width="30" height="30" />
          </Box>
        </Box>
      </Box>

      <ModalComp open={money} onClose={() => setMoey(false)}>
        <Box sx={style.box}>
          <Image src="/image/bni.png" />
          <Text>a.n Fanni Citra Fadillah</Text>
          <Text sx={{ fontWeight: "700", fontSize: "20px" }}>0431530324</Text>
          <Button
            colorScheme="gray"
            leftIcon={<Icon icon="bxs:copy" />}
            borderColor="gray.500"
            border="1px"
            onClick={() => copyButton("0431530324")}
          >
            Copy
          </Button>
        </Box>
        <Box sx={style.box}>
          <Image src="/image/mandiri.png" />
          <Text>a.n Dimas Fauzi</Text>
          <Text sx={{ fontWeight: "700", fontSize: "20px" }}>
            1170007445588
          </Text>
          <Button
            colorScheme="gray"
            leftIcon={<Icon icon="bxs:copy" />}
            borderColor="gray.500"
            border="1px"
            onClick={() => copyButton("1170007445588")}
          >
            Copy
          </Button>
        </Box>
      </ModalComp>

      <ModalComp open={gift} onClose={() => setGift(false)}>
        <Box sx={style.box}>
          <Icon icon="ant-design:home-filled" width="40px" />
          <Text>Fanni Citra Fadillah</Text>
          <Text sx={{ fontSize: "14px", textAlign: "center" }}>{alamat}</Text>
          <Button
            colorScheme="gray"
            leftIcon={<Icon icon="bxs:copy" />}
            borderColor="gray.500"
            border="1px"
            onClick={() => copyButton(alamat)}
          >
            Copy
          </Button>
        </Box>
      </ModalComp>
    </Box>
  );
}

const ModalComp = ({ Title, open, onClose, children }) => {
  return (
    <Modal isOpen={open} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader></ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
};
const style = {
  wrapper: {
    bgColor: "gray.300",
    p: "50px 20px 60px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "60px",
    height: "60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    bgColor: "gray.700",
    borderRadius: "8",
    cursor: "pointer",
  },
  box: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingY: "20px",
    gap: "5px",
  },
};
