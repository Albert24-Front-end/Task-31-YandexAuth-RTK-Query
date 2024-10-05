import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import Input from "../UI/input/Input";
import Button from "../UI/Button/Button";
import { useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../store/API/authAPI";
import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";

const schema = yup
  .object({
    email: yup.string().email("Введите почту в правильном формате").required("Обязательное поле для ввода"),
    password: yup.string().required("Обязательное поле для ввода").min(8, "Минимум 8 символов").max(16, "Максимум 16 символов"),
  });

  interface LoginForm {
    email: string;
    password: string;
  }

const LoginForm =()=> {
    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(schema),
      defaultValues: {
        email: "",
        password: "",
      }
    })
    const navigate = useNavigate();
    const [ loginUser, {data: loginData}] = useLoginUserMutation();
    const {isSignedIn} = useUser();
    // data (нельзя называть по-другому) - данные, возвращаемые сервером в случае успешного запроса, loginUser - функция, отправляющая данные из логин формы в бэкэнд
    
    const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (loginData?.message) {
      localStorage.removeItem("userId");
      alert(loginData.message)
    }
    if (loginData?.user_id) {
      localStorage.setItem("userId", JSON.stringify(loginData?.user_id));
      console.log("Going to main")
      navigate("/main")
    }
    if(isSignedIn|| userId) {
      navigate("/main")
    }
  }, [isSignedIn, userId, loginData]);

    const onSubmit: SubmitHandler<LoginForm> = (data) => {
      console.log(data);
      loginUser({email: data.email, password: data.password});
    };

  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
        control={control}
        name="email"
        render={({field})=>(
            <Input 
                type={"text"} 
                placeholder={"Почта"} 
                isError={errors.email ? true : false}
                errorMessage={errors.email?.message}
                {...field}
            />
    )}
        />
        <Controller
        control={control}
        name="password"
        render={({field})=>(
            <Input 
                type={"password"} 
                placeholder={"Пароль"} 
                isError={errors.password ? true : false}
                errorMessage={errors.password?.message}
                {...field}
            />
    )}
        />
        <Button text={"Войти"} type={"submit"}/>
      </form>
    );
  };

export default LoginForm