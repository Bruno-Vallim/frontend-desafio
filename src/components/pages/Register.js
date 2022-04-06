import RegisterForm from "../Form/RegisterForm";
import styles from "./Register.modules.css";

function Register() {
  return (
    <div className="register_container">
      <h1>Criar seu cadastro</h1>
      <RegisterForm btnText='Criar Usuário'/>
    </div>
  );
}

export default Register;
