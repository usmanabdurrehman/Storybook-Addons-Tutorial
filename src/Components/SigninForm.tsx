import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";

export const SigninForm = ({ onSubmit }: { onSubmit: () => void }) => (
  <Flex
    height="100vh"
    alignItems={"center"}
    justifyContent="center"
    bg="#d8bfff"
  >
    <Box boxShadow={"2xl"} width="350px" padding="10" rounded="xl" bg="white">
      <Text fontSize={"3xl"}>Signin</Text>

      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input />
      </FormControl>

      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input />
      </FormControl>

      <Button colorScheme={"whatsapp"} mt={4} mr={4} onClick={onSubmit}>
        Sign In
      </Button>
    </Box>
  </Flex>
);
