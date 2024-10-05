  import { Heading, RegistrationInfo } from "../../components"
import RegistrationForm from "../../components/forms/RegistrationForm";
import { SCRegistrationPage } from "./RegistrationPage.styled";


export const RegistrationPage = () => {
    return (
      <SCRegistrationPage>
      <Heading variant={"h1"} text={"Регистрация"}/>
      <RegistrationForm/>
      {/* <form action="#">
        <Input type={"text"} placeholder={"Имя и фамилия"}/>
        <Input type={"number"} placeholder={"Возраст"}/>
        <Input type={"text"} placeholder={"Город"}/>
        <Input type={"email"} placeholder={"Электроннная почта"}/>
        <Input type={"tel"} placeholder={"Номер телефона"}/>
        <Input type={"password"} placeholder={"Пароль"}/>
        <Button type={"button"} text={"Зарегистрироваться"}/>
      </form> */}
      <RegistrationInfo
      authWithText={"Войти"}
      hasAccountText={"У вас уже есть аккаунт?" }
      linkText={"Зарегистрироваться с помощью"}
      navigatePath="/registration"/>
      </SCRegistrationPage>
    );
};