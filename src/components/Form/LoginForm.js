import Input from "./InputForm";
import SubmitButton from "./SubmitButton";

function LoginForm({ btnText }) {
  return (
    <form>
      <Input
        type="text"
        text="Login"
        name="login"
        placeholder="Login"
      />
      <Input
        type="password"
        text="Senha"
        name="password"
        placeholder="Digite sua senha"
      />
      <SubmitButton text={btnText} />
    </form>
  );
}

export default LoginForm;
