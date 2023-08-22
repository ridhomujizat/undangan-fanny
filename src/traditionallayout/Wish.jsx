import React, { useEffect } from "react";
import {
  Box,
  Text,
  Input,
  Button,
  Textarea,
  Divider,
  useToast,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import {
  collection,
  getDocs,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import db from "@/config/firebase";

export default function Rsvp({ name }) {
  const toast = useToast();

  const [limit, setLimit] = React.useState(5);
  const [wishList, setWishList] = React.useState([]);
  const [showData, setShowData] = React.useState([]);
  const [comment, setComment] = React.useState(null);

  React.useEffect(() => {
    const wishCollection = collection(db, "wish");
    const q = query(wishCollection, orderBy("created"));
    const unsubcribe = onSnapshot(q, (s) => {
      const data = s.docs
        .map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
        .reverse();
      setWishList(data);
      console.log("realtime", data);
    });
    // getWish();

    return () => unsubcribe();
  }, []);

  const getWish = async () => {
    try {
      const wishCollection = collection(db, "wish");
      const respon = await getDocs(wishCollection);
      const data = respon.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(data);
      setWishList(data);
    } catch (error) {
      toast({
        title: "failed to get a message",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      console.log(error);
    }
  };

  const addWish = async () => {
    try {
      if (comment === null || !name) return false;
      const wishCollection = collection(db, "wish");
      console.log(name, comment);
      const respon = await addDoc(wishCollection, {
        name,
        comment,
        created: await serverTimestamp(),
      });
      setComment(null);
      toast({
        title: "Message sent successfully",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Message failed to send",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };
  return (
    <Box sx={style.wrapper}>
      <Text
        sx={{ fontSize: "20px", textAlign: "center", fontWeight: "500" }}
        data-aos="fade-up"
      >
        Wedding Wish
      </Text>
      <Text
        sx={{ fontSize: "14px", textAlign: "center", mt: "10px" }}
        data-aos="fade-up"
      >
        Thanks for all the wedding wishes! You made a great day even greater!
      </Text>
      <Box
        sx={{
          maxWidth: ["95%", "80%"],
          width: "100%",
          m: "20px",
          p: "10px",
          bgColor: "gray.500",
          borderRadius: "8px",
        }}
        data-aos="fade-up"
      >
        <Text
          sx={{
            fontSize: "14px",
            color: "#fff",
            fontWeight: "700",
            display: "flex",
            gap: "5px",
            mb: "5px",
          }}
        >
          <Icon icon="mdi:bird" color="white" width="20" height="20" />
          {wishList.length} Ucapan
        </Text>
        <Divider />
        <Input
          placeholder="Name"
          width="100%"
          bgColor="#fff"
          disabled
          mt="10px"
          value={name}
        />
        <Textarea
          placeholder="Say something.."
          width="100%"
          bgColor="#fff"
          my="10px"
          onChange={(e) => {
            e.preventDefault();
            setComment(e.target.value);
          }}
        />
        <Button size="sm" onClick={addWish} disabled={!name}>
          Send
        </Button>
        <Box sx={{ mt: "50px", color: "#fff" }}>
          {wishList.slice(0, limit).map((val) => (
            <div key={val.id}>
              <Divider />
              <Box p="10px" display="flex" gap="20px" alignItems="center">
                <div>
                  <Text sx={{ fontWeight: "700", fontSize: "14px" }}>
                    {val.name}
                  </Text>
                  <Text color="gray.300">{val.comment}</Text>
                </div>
              </Box>
            </div>
          ))}
          <Divider />
          {wishList.length > limit && (
            <Text
              py="10px"
              textAlign="center"
              cursor="pointer"
              fontWeight="bold"
              textDecoration="underline"
              onClick={() => setLimit(limit + 5)}
            >
              Show More
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
