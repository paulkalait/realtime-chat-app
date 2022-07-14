import Login from "../components/Login"
import Sidebar from '../components/Sidebar'
import { ChakraProvider} from '@chakra-ui/react'


function MyApp({ Component, pageProps }) {
  // <Login />
  return(
    //wrap with chakra provide
    <ChakraProvider>
    <Component {...pageProps} />
    </ChakraProvider>
  ) 
}

export default MyApp
