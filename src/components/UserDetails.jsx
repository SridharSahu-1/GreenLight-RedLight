import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  Button,
  FormControl,
  Input,
  FormLabel,
  Select,
  ModalHeader,
  HStack,
} from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";
import {
  setDifficulty,
  setIsModalOpen,
  setPlayer,
} from "../redux/playerReducer";
import { useState } from "react";

export default function UserDetails() {
  const { isModalOpen } = useSelector((state) => state.player);
  const [user, setUser] = useState({
    name: "",
    mobile: "",
    email: "",
  });
  const dispatch = useDispatch();
  const emailRegex = new RegExp("^[\\w-.]+@([\\w-]+\\.)+[\\w-]{2,4}$", "g");

  function onClose() {
    dispatch(setIsModalOpen(false));
  }
  return (
    <Modal
      isOpen={isModalOpen}
      onClose={onClose}
      isCentered
      size={{
        base: "xs",
        sm: "sm",
      }}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <ModalCloseButton />
        </ModalHeader>
        <ModalBody pt="5" pb="8">
          <FormControl display="flex" flexDirection="column" gap="3">
            <HStack>
              <FormLabel width="10ch">Name</FormLabel>
              <Input
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                type="text"
                isRequired
              />
            </HStack>
            <HStack>
              <FormLabel width="10ch">Email</FormLabel>
              <Input
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                type="email"
                isRequired
              />
            </HStack>
            <HStack>
              <FormLabel width="10ch">Mobile</FormLabel>
              <Input
                onChange={(e) => setUser({ ...user, mobile: e.target.value })}
                type="number"
                isRequired
              />
            </HStack>
            <Select
              onChange={(e) => dispatch(setDifficulty(e.target.value))}
              isRequired
              defaultValue="easy"
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </Select>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button
            mr="5"
            borderColor="blackAlpha.500"
            variant="outline"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              dispatch(setPlayer(user));
              onClose();
            }}
            px="5"
            variant="solid"
            colorScheme="purple"
            isDisabled={
              user.name === "" ||
              !emailRegex.test(user.email) ||
              user.mobile === ""
            }
          >
            Ok
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
