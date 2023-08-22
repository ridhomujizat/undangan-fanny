import React from "react";
import { Box, Text, Input, Button } from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";

import db from "@/config/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function Rsvp({ name }) {
  const [clicked, setClicked] = React.useState(false);

  const sendrsvp = async (going) => {
    setClicked(true);
    if (!name) return false;
    const wishCollection = collection(db, "rsvp");
    const respon = await addDoc(wishCollection, {
      name,
      going,
      created: await serverTimestamp(),
    });
  };

  return (
    <Box sx={style.wrapper}>
      <Text
        sx={{ fontSize: "20px", textAlign: "center", fontWeight: "500" }}
        data-aos="fade-up"
      >
        RSVP
      </Text>
      <Text
        sx={{ fontSize: "14px", textAlign: "center", mt: "10px" }}
        data-aos="fade-up"
      >
        We look forward to celebrate this special day with you. Please kindly
        respond
      </Text>
      <Box sx={{ maxWidth: "600px", width: "100%", mt: "20px" }}>
        <Input
          placeholder="Name"
          width="100%"
          bgColor="gray.400"
          disabled
          value={name}
          data-aos="fade-up"
        />
        <Box
          sx={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            mt: "20px",
          }}
        >
          {!clicked ? (
            <>
              <Button
                leftIcon={<CheckIcon />}
                colorScheme="green"
                data-aos="fade-right"
                onClick={() => sendrsvp(true)}
                disabled={!name}
              >
                Going
              </Button>
              <Button
                leftIcon={<CloseIcon />}
                colorScheme="red"
                data-aos="fade-left"
                onClick={() => sendrsvp(false)}
                disabled={!name}
              >
                Not Going
              </Button>
            </>
          ) : (
            <Text data-aos="fade-up" fontSize="20px" fontWeight="bold">
              Thank you for the confirmation.
            </Text>
          )}
        </Box>
      </Box>
    </Box>
  );
}
const style = {
  wrapper: {
    bgColor: "gray.300",
    p: "50px 20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};
