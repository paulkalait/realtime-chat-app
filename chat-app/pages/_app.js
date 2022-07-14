import Login from "../components/Login"
import Sidebar from '../components/Sidebar'
import { ChakraProvider, Spinner, Center} from '@chakra-ui/react'
//firebase react npm pack
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth} from '../firebase.js'


function MyApp({ Component, pageProps }) {
  const [user, loading, error] = useAuthState(auth);

  if(loading){
    return(
      <ChakraProvider>
      <Center h="100vh" >
      <Spinner size="xl" /></Center>


      </ChakraProvider>
    )
  }

  if(!user){
    return(
      <ChakraProvider>
      <Login />
      </ChakraProvider>
    )
  }
  // <Login />
  return(
    //wrap with chakra provide
    <ChakraProvider>
    <Component {...pageProps} />
    </ChakraProvider>
  ) 
}

export default MyApp
