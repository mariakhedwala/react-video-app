import {
  Container,
  Heading,
  Input,
  Button,
  VStack,
  Text,
  Avatar,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <Container maxWidth={"container.xl"} h={"100vh"} p={"16"}>
      <form>
        <VStack
          alignItems={"stretch"}
          spacing={"8"}
          w={["full", "96"]}
          margin={"auto"}
          my={"16"}
        >
          <Heading>Welcome to Video hub</Heading>
          <Avatar alignSelf={"center"} boxSize={"32"}></Avatar>
          <Input
            type={"text"}
            placeholder={"Name..."}
            required
            focusBorderColor={"purple.500"}
          />
          <Input
            type={"email"}
            placeholder={"Email..."}
            required
            focusBorderColor={"purple.500"}
          />
          <Input
            type={"password"}
            placeholder={"Password..."}
            required
            focusBorderColor={"purple.500"}
          />
          <Button colorScheme={"purple"} type={"submit"}>
            Sign Up
          </Button>
          <Text textAlign={"right"}>
            Already signed up?{" "}
            <Button variant={"link"} colorScheme={"purple"}>
              <Link to={"/login"}>Login</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};
export default SignUp;
