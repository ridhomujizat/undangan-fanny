import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import db from "@/config/firebase";

export default function kehadiran() {
  const [rsvpList, setRsvpList] = React.useState([]);

  React.useEffect(() => {
    const wishCollection = collection(db, "rsvp");
    const q = query(wishCollection, orderBy("created"));
    const unsubcribe = onSnapshot(q, (s) => {
      const data = s.docs
        .map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      setRsvpList(data);
    });
    // getWish();

    return () => unsubcribe();
  }, []);
  return (
    <TableContainer>
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Going</Th>
          </Tr>
        </Thead>
        <Tbody>
          {rsvpList.map((val) => (
            <Tr key={val.id}>
              <Td>{val.name}</Td>
              <Td>{val.going ? "Datang" : "Tidak Datang"}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
