import axios from "axios";
import BgDefault from "components/BgDefault";
import { useState } from "react";
import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { loginService } from "services/authService";
import swall from "sweetalert";
import * as S from "./style";
const logoxxt = require("assets/images/logoxxt.png");

interface userLoginObj {
    username: string;
    password: string;
  }

const Login = (props: any) => {
    const [values, setValues] = useState({
        username: "",
        password: "",
    })

    let navigate = useNavigate();

    const handleChangesValues = (event: React.ChangeEvent<HTMLInputElement>)  => {
        // faco uma copia do objeto no estado (values) e adiciono as pripriedades digitadas pelo usuario
        // após isso retorno para a função que vai atualizar esse valor no estado da aplicação.
        setValues((values: userLoginObj) => ({
          ...values,
          [event.target.name]: event.target.value
        }))
      }


      const loginUser = async (event: React.SyntheticEvent) => {
        event.preventDefault();
        const response = await loginService.login(values)
        const jwt = response.data.token;
    
        if(jwt) {
          localStorage.setItem('jwtLocalStorage', jwt);
          swall({
            title: 'Seja bem vindo',
            icon: 'success',
            timer: 3000,
          })
          navigate('/');
        }
        console.log(response.data);
      }
    return (
        <S.Login>
           

            <BgDefault />

            <S.LoginContent>

                <S.LoginLogo src={logoxxt}></S.LoginLogo>


                <S.LoginForm onSubmit={loginUser}>
        <S.LoginTitle>Faça seu Login</S.LoginTitle>


        <input type='text' placeholder="Username" onChange={handleChangesValues}></input>
        <input type='password' placeholder="Insira sua senha" onChange={handleChangesValues}></input>
        
        <button>Sign up</button>

        <h2>Não possui uma Conta? <Link to='register'>Cadastre-se</Link></h2>
        </S.LoginForm>
                
            </S.LoginContent>

        </S.Login>
    );
};

export default Login;
