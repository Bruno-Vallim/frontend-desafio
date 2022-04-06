import Input from "./InputForm";
import SubmitButton from "./SubmitButton";

function RegisterForm({ btnText }) {
  return (
    <form>
      <Input
        type="text"
        text="Nome do Usuário"
        name="name"
        placeholder="Insira o nome do Usuário"
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

export default RegisterForm;
