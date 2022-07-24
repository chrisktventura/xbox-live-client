import BgDefault from "components/BgDefault";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginService } from "services/authService";
import swall from "sweetalert";
import * as S from "./style";
const logoxxt = require("assets/images/logoxxt.png");

interface userLoginObj {
    nickname: string;
    password: string;
  }

const Login = (props: any) => {
    const [values, setValues] = useState({
        nickname: "",
        password: "",
    })

    let navigate = useNavigate();

    const handleChangesValues = (event: React.ChangeEvent<HTMLInputElement>)  => {
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
          navigate('/profiles');
        }
      }
    return (
        <S.Login>
           

            <BgDefault />

            <S.LoginContent>

                <S.LoginLogo src={logoxxt}></S.LoginLogo>


                <S.LoginForm onSubmit={loginUser}>
        <S.LoginTitle>Faça seu Login</S.LoginTitle>


        <input type='text' placeholder="nickname" name="nickname" onChange={handleChangesValues}></input>
        <input type='password' placeholder="Insira sua senha" name='password' onChange={handleChangesValues}></input>
        
        <button onSubmit={loginUser}>Entrar</button>

        <h2>Não possui uma Conta? <Link to='register'>Cadastre-se</Link></h2>
        </S.LoginForm>
                
            </S.LoginContent>

        </S.Login>
    );
};

export default Login;
