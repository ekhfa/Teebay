import React, { useState } from "react";
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from "@mantine/core";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:9090/login", {
        email,
        password,
      });

      if (response.status == 200) {
        console.log("Logged in successfully");
        navigate("/navbar");
      } else {
        console.log("Login failed");
      }
    } catch (error) {
      console.error("An error occurred", error);
    }
  };
  return (
    <Container size={420} my={40}>
      <Title
        align="center"
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 900,
        })}
      >
        Welcome!
      </Title>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput
          label="Email"
          placeholder="Enter Your Email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <PasswordInput
          label="Password"
          placeholder="Enter Your password"
          value={password}
          required
          mt="md"
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button fullWidth mt="xl" onClick={handleLogin}>
          Sign in
        </Button>
        <Text color="dimmed" size="sm" align="center" mt={5}>
          Don't have an account?{" "}
          <Anchor size="sm" component="button">
            <NavLink to="/signup">Sign Up!</NavLink>
          </Anchor>
        </Text>
      </Paper>
    </Container>
  );
}
export default LoginPage;
