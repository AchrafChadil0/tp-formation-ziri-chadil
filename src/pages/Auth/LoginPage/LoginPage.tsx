import LoginForm from "../../../components/LoginForm/LoginForm.tsx";
import AuthTemplate from "../../../templates/AuthTemplate/AuthTemplate.tsx";

function LoginPage() {
  return <AuthTemplate children={<LoginForm />}/>;
}

export default LoginPage;
