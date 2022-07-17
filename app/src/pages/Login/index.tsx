import axios from "axios";
import BgDefault from "components/BgDefault";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import * as S from "./style";
const logoxxt = require("assets/images/logoxxt.png");

const Login = () => {

    const { isLoading, isError, data, error, refetch } = useQuery(
        "joke",
        async () => {
          const { data } = await axios("https://api.chucknorris.io/jokes/random");
          console.log(data.value);
          return data;
        }
      );
    return (
        <S.Login>
           

            <BgDefault />

            <S.LoginContent>

                <S.LoginLogo src={logoxxt}></S.LoginLogo>


                <S.LoginForm>
        <S.LoginTitle>Faça seu Login</S.LoginTitle>

        <label htmlFor="">Username</label>
        <input type='text'></input>

        <label htmlFor="">Password</label>
        <input type='password'></input>
        
        <button>Sign up</button>

        <h2>Não possui uma Conta? <Link to='register'>Cadastre-se</Link></h2>
        </S.LoginForm>
                
            </S.LoginContent>

        </S.Login>
    );
};

export default Login;