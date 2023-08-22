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

function SignupPage() {
  return (
    <Container size={520} my={40}>
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
              <TextInput label="FirstName" placeholder="FirstName" required />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput label="LastName" placeholder="LastName" required />
            </Grid.Col>
            </Grid>
          <TextInput label="Address" placeholder="Adress" required />
          <Grid gutter="md">
            <Grid.Col span={6}>
            <TextInput label="Email" placeholder="you@mantine.dev" required />
            </Grid.Col>
            <Grid.Col span={6}>
            <TextInput label="PhoneNumber" placeholder="PhoneNumber" required />
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
        <Button fullWidth mt="xl">
          Sign Up
        </Button>
        <Text color="dimmed" size="sm" align="center" mt={5}>
          Already have an account?{" "}
          <Anchor
            size="sm"
            onClick={(event) => event.preventDefault()}
          >
            Sign In
          </Anchor>
        </Text>
      </Paper>
    </Container>
  );
}

export default SignupPage;
