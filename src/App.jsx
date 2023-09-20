import { Box, Heading, VStack, Button } from "@chakra-ui/react";
import UserDetails from "./components/UserDetails";
import PlayGround from "./components/PlayGround";
import { useDispatch, useSelector } from "react-redux";
import { setIsGameStarted, setIsModalOpen } from "./redux/playerReducer";
import Leaderboard from "./components/Leaderboard";
import LoseModal from "./components/modal/LoseModal";
import SuccessModal from "./components/modal/SuccessModal";

function App() {
  const { name, isGameStarted } = useSelector((state) => state.player);
  const dispatch = useDispatch();

  return (
    <VStack gap="3">
      <Box w="full" py="5" backgroundColor="#536f6b" color={"white"}>
        <Heading as="h3" textAlign="center">
          GREENLIGHT REDLIGHT
        </Heading>
      </Box>
      {name === "" ? (
        <Button
          colorScheme="teal"
          onClick={() => dispatch(setIsModalOpen(true))}
          mt="20px"
        >
          Register
        </Button>
      ) : (
        <Button
          hidden={isGameStarted}
          colorScheme="teal"
          onClick={() => dispatch(setIsGameStarted(true))}
        >
          Start Now
        </Button>
      )}
      <UserDetails />
      <PlayGround />
      <Leaderboard />
      <LoseModal />
      <SuccessModal />
    </VStack>
  );
}

export default App;
