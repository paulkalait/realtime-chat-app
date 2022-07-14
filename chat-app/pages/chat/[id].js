import Sidebar from "../../components/Sidebar";
import {
  Flex,
  Avatar,
  Heading,
  Input,
  FormControl,
  Button,
  Text,
} from "@chakra-ui/react";

const Topbar = () => {
  return (
    <Flex bg="gray.200" w="100%" h="80px" align="center" p={5}>
      <Avatar marginEnd="3" />
      <Heading size="md">user@gmail.com</Heading>
    </Flex>
  );
};

const BottomBar = () => {
  return (
    <FormControl p={3}>
      <Input placeholder="Type a message..." />
      <Button type="submit" hidden autoComplete="off"></Button>
    </FormControl>
  );
};
export default function Chat() {
  return (
    <Flex h="100vh">
      <Sidebar />

      {/*  right side of screen flex is 1 because it will fill whole container*/}
      <Flex flex={1} flexDirection="column">
        <Topbar />

        <Flex flex={1} direction="column" pt={4} mx={3} overflowX="scroll" sx={{scrollbarWidth: "none"}}>
          <Flex
            bg="blue.100"
            w="fit-content"
            minWidth="100px"
            borderRadius="lg"
            alignSelf="flex-end"
            m={1}
            p={3}
          >
            <Text>This is a dummy message</Text>
          </Flex>
          
          <Flex
            bg="blue.100"
            w="fit-content"
            minWidth="100px"
            borderRadius="lg"
            alignSelf="flex-end"
            m={1}
            p={3}
          >
            <Text>a</Text>
          </Flex>
          <Flex
            bg="green.100"
            w="fit-content"
            minWidth="100px"
            borderRadius="lg"
            m={1}
            p={3}
          >
            <Text>This is a dummy message</Text>
          </Flex>
        </Flex>

        <BottomBar />
      </Flex>
    </Flex>
  );
}
