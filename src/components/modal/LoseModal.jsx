import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../../redux/playerReducer";

export default function LoseModal() {
  const { status } = useSelector((state) => state.player);
  const dispatch = useDispatch();

  function onClose() {
    dispatch(reset());
  }
  return (
    <Modal
      size={{
        base: "xs",
        sm: "sm",
      }}
      isOpen={status === "LOSE"}
      onClose={onClose}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <ModalCloseButton />
        </ModalHeader>

        <ModalBody textAlign={"center"} fontSize={20} fontWeight={500}>
          Sorry You Lose 😔
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" m={"auto"} onClick={onClose}>
            Try Again
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
