import { Avatar, Flex, IconButton, Text, Button } from "@chakra-ui/react"
import { ArrowLeftIcon } from "@chakra-ui/icons"


//seperate chat component
const Chat = () =>{
    return (
        <Flex _hover={{bg: "gray.100", cursor: "pointer" }} align="center" p={3}>
        <Avatar marginEnd={3} marginStart={3} />
        <Text>user@gmail.com</Text>
        </Flex>
    )
}
export default function Sidebar(){
    return (
        <Flex  w="300px" h="100vh" borderEnd="1px solid" borderColor="black.200" direction="column">
        <Flex  h="80px" w="100%" align="center" justifyContent="space-between" p={3} borderBottom="1px" borderColor="black">
        
        <Flex align="center" >
        <Avatar marginEnd={3} />
        <Text>Johne doe</Text>
        </Flex>
       
         <IconButton icon={ArrowLeftIcon} size="sm" color="black" isRound/>
        </Flex>
         <Button m={5} p={4}>New Chat</Button>


       <Flex overflowX="scroll" flexDirection="column" sx={{scrollbarWidth: "none"}}>
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
    )
}