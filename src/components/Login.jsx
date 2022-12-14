import {
  Container,
  Heading,
  Input,
  Button,
  VStack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
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
          <Heading>Welcome back</Heading>
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
          <Button variant={"link"} alignSelf={"flex-end"}>
            <Link to={"/forgetpassword"}>Forget Password</Link>
          </Button>
          <Button colorScheme={"purple"} type={"submit"}>
            Log In
          </Button>
          <Text textAlign={"right"}>
            New User?{" "}
            <Button variant={"link"} colorScheme={"purple"}>
              <Link to={"/signup"}>SignUp</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
