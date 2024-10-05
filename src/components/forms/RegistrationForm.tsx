import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useNavigate } from "react-router-dom";

import { useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { useRegisterUserMutation } from "../../store/API/authAPI";
import Input from "../UI/input/Input";
import Button from "../UI/Button/Button";

const schema = yup.object({
  firstNameSurname: yup.string().required("Обязательное поле для ввода"),
  age: yup
    .number()
    .positive()
    .integer()
    .required("Обязательное поле для ввода"),
  city: yup.string().required("Обязательное поле для ввода"),
  email: yup
    .string()
    .email("Введите почту в правильном формате")
    .required("Обязательное поле для ввода"),
  phone: yup
    .string()
    .matches(/^\+?[1-9]\d{1,14}$/, "Введите телефон в правильном формате")
    .required("Обязательное поле для ввода"),
  password: yup
    .string()
    .required("Обязательное поле для ввода")
    .min(8, "Минимум 8 символов")
    .max(16, "Максимум 16 символов"),
});

interface RegistrationForm {
  firstNameSurname: string;
  age: number;
  city: string;
  email: string;
  phone: string;
  password: string;
}

const RegistrationForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      firstNameSurname: "",
      city: "",
      email: "",
      password: "",
      phone: "",
    },
  });
  const navigate = useNavigate();
  const [registerUser, { data: registrationData }] = useRegisterUserMutation();
  const { isSignedIn } = useUser();

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (registrationData?.message) {
      localStorage.removeItem("userId");
      alert(registrationData.message);
    }
    if (registrationData?.user_id) {
      localStorage.setItem("userId", JSON.stringify(registrationData?.user_id));
      console.log("Going to main");
      navigate("/main");
    }
    if (isSignedIn || userId) {
      navigate("/main");
    }
  }, [isSignedIn, userId, registrationData]);

  const onSubmit: SubmitHandler<RegistrationForm> = (data) => {
    registerUser({
      email: data.email,
      password: data.password,
      name: data.firstNameSurname,
      user_city: data.city,
      phone_number: data.phone,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="firstNameSurname"
        render={({ field }) => (
          <Input
            type={"text"}
            placeholder={"Имя и фамилия"}
            isError={errors.firstNameSurname ? true : false}
            errorMessage={errors.firstNameSurname?.message}
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="age"
        render={({ field }) => (
          <Input
            type={"number"}
            placeholder={"Возраст"}
            isError={errors.age ? true : false}
            errorMessage={errors.age?.message}
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="city"
        render={({ field }) => (
          <Input
            type={"text"}
            placeholder={"Город"}
            isError={errors.city ? true : false}
            errorMessage={errors.city?.message}
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="email"
        render={({ field }) => (
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
        name="phone"
        render={({ field }) => (
          <Input
            type={"number"}
            placeholder={"Телефон"}
            isError={errors.phone ? true : false}
            errorMessage={errors.phone?.message}
            {...field} // для связывания значений input с контроллером
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field }) => (
          <Input
            type={"password"}
            placeholder={"Пароль"}
            isError={errors.password ? true : false}
            errorMessage={errors.password?.message}
            {...field}
          />
        )}
      />
      <Button text={"Зарегистрироваться"} type={"submit"} />
    </form>
  );
};
export default RegistrationForm;
