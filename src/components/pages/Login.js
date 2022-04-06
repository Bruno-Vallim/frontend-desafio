import LoginForm from "../Form/LoginForm";
import styles from "./Login.modules.css";

function Login() {
  return (
    <div className="mainContainerLogin">
      <h1>Pagina Login</h1>
      <LoginForm btnText="Entrar" />
    </div>
  );
}

export default Login;
