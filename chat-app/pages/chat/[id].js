import Sidebar from '../../components/Sidebar'
import { Flex, Avatar  } from '@chakra-ui/react'

const Topbar = () => {
    return (
        <Flex>
        <Avatar />
        </Flex>
    )
}
export default function Chat(){
    return (
        <Flex h="100vh">
        <Sidebar />

        <Flex bg="blue.400" flex={1}>
        
        <Topbar />
        </Flex>
        </Flex>
    )
}