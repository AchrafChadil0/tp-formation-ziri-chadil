import {
  TextInput,
  PasswordInput,
  Paper,
  Title,
  Container,
  Button,
  Radio,
  Group,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import classes from "./LoginForm.module.css";

function LoginForm() {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      userRole: "Participant",
    },

    validate: {
      email: (value) =>
        /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/.test(value)
          ? null
          : "Email invalide",
      password: (value) =>
        /^.{8,}$/.test(value) ? null : "Mot de passe court",
    },
  });

  return (
    <Container size={500} my={40}>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <Title ta="center" className={classes.title}>
          Bienvenue
        </Title>
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput
            {...form.getInputProps("email")}
            label="Email"
            withAsterisk
            placeholder="you@example.com"
            required
          />
          <PasswordInput
            label="Mot de passe"
            {...form.getInputProps("password")}
            placeholder="Votre mot de passe"
            required
            mt="md"
          />

          <Radio.Group
            name="userRole"
            label="Connexion en tant que"
            {...form.getInputProps("userRole")}
            withAsterisk
          >
            <Group mt="xs">
              <Radio value="Participant" label="Participant" required />
              <Radio value="Formateur" label="Formateur" required />
            </Group>
          </Radio.Group>

          <Button fullWidth mt="xl" type="submit">
            S'inscrire
          </Button>
        </Paper>
      </form>
    </Container>
  );
}

export default LoginForm;
