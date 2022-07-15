import { Avatar, Flex, IconButton, Text, Button } from "@chakra-ui/react";
import { ArrowLeftIcon } from "@chakra-ui/icons";
//import sign out from firebaseimport 
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';
import  { collection} from '@firebase/firestore'
import { db } from '../firebase'

//import sign out from firebaseimport 

//seperate chat component
const Chat = () => {
  return (
    <Flex _hover={{ bg: "gray.100", cursor: "pointer" }} align="center" p={3}>
      <Avatar marginEnd={3} marginStart={3} />
      <Text>user@gmail.com</Text>
    </Flex>
  );
};
export default function Sidebar() {
  const [user] = useAuthState(auth);
  const [snapshot, loading, error] = useCollection(collection(db, "chats"));
  // only if snapshot is defined then do the maps on the docs
  const chats = snapshot?.docs.map(doc => ({id: doc.id, ...doc.data()}))
  console.log(chats)
  return (
    <Flex
      w="300px"
      h="100%"
      borderEnd="1px solid"
      borderColor="black.200"
      direction="column"
    >
      <Flex
        h="80px"
        w="100%"
        align="center"
        justifyContent="space-between"
        p={3}
        borderBottom="1px"
        borderColor="black"
      >
        <Flex align="center">
          <Avatar  src={user.photoURL} />
          <Text>{user.displayName}</Text>
        </Flex>

        <IconButton icon={ArrowLeftIcon} size="sm" color="black" isRound onClick={() => signOut(auth)} />
      </Flex>
      <Button m={5} p={4}>
        New Chat
      </Button>

      <Flex
        overflowX="scroll"
        flexDirection="column"
        sx={{ scrollbarWidth: "none" }}
        flex={1}
      >
        <Chat />
        <Chat />
        <Chat />
        <Chat /> <Chat /> <Chat /> <Chat /> <Chat /> <Chat /> <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
      </Flex>
    </Flex>
  );
}
