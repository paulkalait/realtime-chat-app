import Head from "next/head";
import { ChatIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Stack} from "@chakra-ui/react";

export default function Login() {
  return (
    //title of page to Login
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Center
      h='100vh'>
      <Stack align="center" bgColor="gray.400" p={16} rounded="2xl" spacing={12} boxShadow="Lg">
      <Box
          bgColor="blue.500"
          w="fit-content"
          p={5}
          rounded="2xl"
          boxShadow="md"
        >
          <ChatIcon w="100px" h="100px" color="white" />
        </Box>

        <Button boxShadow="md">Sign In with google</Button>
      </Stack>
      </Center>
    </>
  );
}
