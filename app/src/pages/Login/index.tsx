import BgDefault from "components/BgDefault";
import * as S from "./style";
const logoxxt = require("assets/images/logoxxt.png");

const Login = () => {
    return (
        <S.Login>

            <BgDefault />

            <S.LoginContent>

                <S.LoginLogo src={logoxxt}></S.LoginLogo>
                <S.Text>Games</S.Text>

                <S.LoginForm>

                    <p>Username</p>
                    <S.LoginInput >
                    </S.LoginInput>


                    <p>Password</p>
                    <S.LoginInput >
                    </S.LoginInput>

                    <button>Entrar</button>

                </S.LoginForm>
                
            </S.LoginContent>

        </S.Login>
    );
};

export default Login;