import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
interface SigninFormProps {
  onSubmit: (values: { email: string; password: string }) => void;
}

const ValidationSchema = Yup.object({
  email: Yup.string().required("The email is required"),
  password: Yup.string()
    .required("The password is required")
    .min(10, "The password should have 10 characters"),
});

export const SigninForm = ({ onSubmit }: SigninFormProps) => (
  <Flex
    height="100vh"
    alignItems={"center"}
    justifyContent="center"
    bg="#d8bfff"
  >
    <Box boxShadow={"2xl"} width="350px" padding="10" rounded="xl" bg="white">
      <Formik
        onSubmit={() => {}}
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={ValidationSchema}
      >
        {({ values }) => {
          return (
            <Form>
              <Text fontSize="3xl">Sign In</Text>
              <Field name="email">
                {({ field, meta }: any) => (
                  <FormControl isInvalid={!!meta.error}>
                    <FormLabel>Email</FormLabel>
                    <Input {...field} data-testid="email" />
                    <FormErrorMessage>{meta.error}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="password">
                {({ field, meta }: any) => (
                  <FormControl isInvalid={!!meta.error}>
                    <FormLabel>Password</FormLabel>
                    <Input {...field} data-testid="password" />
                    <FormErrorMessage>{meta.error}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Button
                colorScheme={"whatsapp"}
                mt={4}
                onClick={() => {
                  onSubmit(values);
                }}
              >
                Sign in
              </Button>
            </Form>
          );
        }}
      </Formik>
    </Box>
  </Flex>
);
