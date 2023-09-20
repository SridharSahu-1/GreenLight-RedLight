import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Tbody,
  Th,
  Td,
  Heading
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

export default function Leaderboard() {
  const { data } = useSelector((state) => state.leaderboard);
  const { isGameStarted } = useSelector((state) => state.player);
  return (
	<>
	<Heading as="h2" size="lg" color={"white"} mt="20px">
	LEADERBOARD
    </Heading>
    <TableContainer
      hidden={isGameStarted}
      width="calc(100% - 20px)"
      maxWidth="800px"
      border="1px solid #ddd"
      rounded="md"
    >
      <Table colorScheme="teal">
        <Thead>
          <Tr>
            <Th color={"white"}>Rank.</Th>
            <Th color={"white"}>NAME</Th>
            <Th isNumeric color={"white"}>
              {" "}
              Time taken
            </Th>
          </Tr>
        </Thead>
        <Tbody backgroundColor={"#B2F5EA"}>
          {data?.map(({ id, name, time }, index) => (
            <Tr key={id}>
              <Td>{index + 1}</Td>
              <Td>{name}</Td>
              <Td isNumeric>{time}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
	</>
  );
}


