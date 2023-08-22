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
import { NavLink, useNavigate } from "react-router-dom";
import SignupPage from "./SignupPage"; 


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
        <Button fullWidth mt="xl">
          Sign in
        </Button>
        <Text color="dimmed" size="sm" align="center" mt={5}>
          Don't have an account? {" "}
        <Anchor size="sm" component="button">
        <NavLink to="/signup">
          Sign Up!
        </NavLink>  
        </Anchor>
        </Text>
      </Paper>
    </Container>
  );
}
export default LoginPage;