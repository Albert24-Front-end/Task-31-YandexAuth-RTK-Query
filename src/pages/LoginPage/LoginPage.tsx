import { Heading, RegistrationInfo } from "../../components"
import { Link } from "react-router-dom";
import { SCLoginPage } from "./LoginPage.styled";
import LoginForm from "../../components/LoginForm";

export const LoginPage = () => {
  return (
    <SCLoginPage>
      <Heading variant={"h1"} text={"Авторизация"}/>
      <LoginForm/>
      <Link to="/">Забыли пароль?</Link>
      <RegistrationInfo
      authWithText={"Войти с помощью"}
      hasAccountText={"У вас нет аккаунта?" }
      linkText={"Зарегистрироваться"}
      navigatePath="/registration"/>
    </SCLoginPage>
  );
};
