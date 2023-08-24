import React from "react";
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


function SignupPage() {

  const navigate = useNavigate();
  const handleSignUp = () => {
    // Perform signup logic here if needed

    // After successful signup, navigate to the login page
    navigate("/"); // Update the route according to your actual route
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
              <TextInput label="First Name" placeholder="Enter Your First Name" required />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput label="Last Name" placeholder="Enter Your Last Name" required />
            </Grid.Col>
            </Grid>
          <TextInput label="Address" placeholder="Enter Your Address" required />
          <Grid gutter="md">
            <Grid.Col span={6}>
            <TextInput label="Email" placeholder="Enter Your Email" required />
            </Grid.Col>
            <Grid.Col span={6}>
            <TextInput label="Phone Number" placeholder="Enter Your Phone Number" required />
            </Grid.Col>
            </Grid>
          <PasswordInput
            label="Password"
            placeholder="Your password"
            defaultValue="secret"
            required
          />
          <PasswordInput
            label="Confirm password"
            defaultValue="secret"
          />
        </Stack>
        <Button fullWidth mt="xl" onClick={handleSignUp}>
          Sign Up
        </Button>
        <Text color="dimmed" size="sm" align="center" mt={5}>
          Already have an account?{" "}
          <Anchor
            size="sm"
            onClick={(event) => event.preventDefault()}
          >
        <NavLink to="/">
          Sign In 
        </NavLink>
          </Anchor>
        </Text>
      </Paper>
      
    </Container>
  );
}

export default SignupPage;
