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

function LoginPage() {
  return (
    <Container size={420} my={40}>
      <Title
        align="center"
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 900,
        })}
      >
        Welcome back!
      </Title>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput label="Email" placeholder="Enter Your Email" required />
        <PasswordInput
          label="Password"
          placeholder="Enter Your password"
          required
          mt="md"
        />
        <Text color="dimmed" size="sm" align="center" mt={5}>
          Do not have an account yet? {" "}
        <Anchor size="sm" component="button">
          Sign Up!
        </Anchor>
        </Text>
        <Button fullWidth mt="xl">
          Sign in
        </Button>
      </Paper>
    </Container>
  );
}
export default LoginPage;