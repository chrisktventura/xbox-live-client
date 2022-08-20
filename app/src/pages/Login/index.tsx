import BgDefault from "components/BgDefault";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useAuth } from "context/auth";
import swal from "sweetalert";
import { api } from "services/api";

const logoxxt = require("assets/images/logoxxt.png");

interface LoginData {
  nickname: string;
  password: string;
}

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("O formato de e-mail está inválido")
    .required("Campo de e-mail obrigatório"),

  password: yup
    .string()
    .min(8, "Sua senha deve ter no mínimo 8 caracteres")
    .required("Campo de senha obrigatório"),
});

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({ resolver: yupResolver(loginSchema) });


  const handleLogin = (data: LoginData) => {
    api
      .post("/auth/login", data)
      .then((res) => {
        login({ token: res.data.token, user: res.data.user });
      })
      .catch(() => {
        swal("Usuário ou senha inválido");
      });
  };


  return (
    <S.Login>
      <BgDefault />

      <S.LoginContent>

        <S.LoginLogo src={logoxxt}></S.LoginLogo>

        <S.LoginForm onSubmit={handleSubmit(handleLogin)}>

          <S.LoginTitle>Faça seu Login</S.LoginTitle>

          <input type='text' placeholder="nickname" {...register("nickname")}></input>
          <input type='password' placeholder="Insira sua senha" 
          {...register("password")}></input>

          <button onClick={() => handleSubmit}>Entrar</button>

          <h2>Não possui uma Conta? <Link to='register'>Cadastre-se</Link></h2>
          
        </S.LoginForm>

      </S.LoginContent>

    </S.Login>
  );
};

export default Login;
