import React, { useState } from "react";
import {
  TextInput,
  PasswordInput,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Grid,
  Button,
  Stack,
} from "@mantine/core";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

function SignupPage() {
  const [first_name, setFirst_Name] = useState("");
  const [last_name, setLast_Name] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      console.error("Passwords do not match");
      return;
    }
    const userData = {
      first_name,
      last_name,
      email,
      phone,
      address,
      password,
    };
    try {
      const response = await axios.post(
        "http://localhost:9090/registration",
        userData
      );

      //console.log("User Data Saved");

      if (response.status == 200) {
        //console.log("Navigating to next page");
        navigate("/");
      }
    } catch (error) {
      console.error("An error occurred", error);
    }
  };

  return (
    <Container size={520} my={10}>
      <Title
        align="center"
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 900,
        })}
      >
        Create an Account
      </Title>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <Stack spacing="xs">
          <Grid gutter="md">
            <Grid.Col span={6}>
              <TextInput
                label="First Name"
                placeholder="Enter Your First Name"
                required
                value={first_name}
                onChange={(event) => setFirst_Name(event.target.value)}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                label="Last Name"
                placeholder="Enter Your Last Name"
                required
                value={last_name}
                onChange={(event) => setLast_Name(event.target.value)}
              />
            </Grid.Col>
          </Grid>
          <TextInput
            label="Address"
            placeholder="Enter Your Address"
            required
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          />
          <Grid gutter="md">
            <Grid.Col span={6}>
              <TextInput
                label="Email"
                placeholder="Enter Your Email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                label="Phone Number"
                placeholder="Enter Your Phone Number"
                required
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />
            </Grid.Col>
          </Grid>
          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <PasswordInput
            label="Confirm Password"
            placeholder="Confirm your password"
            required
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
        </Stack>
        <Button fullWidth mt="xl" onClick={handleSignUp}>
          Sign Up
        </Button>
        <Text color="dimmed" size="sm" align="center" mt={5}>
          Already have an account?{" "}
          <Anchor size="sm" onClick={(event) => event.preventDefault()}>
            <NavLink to="/">Sign In</NavLink>
          </Anchor>
        </Text>
      </Paper>
    </Container>
  );
}

export default SignupPage;
