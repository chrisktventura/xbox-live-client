import BgDefault from "components/BgDefault";
import * as S from "./style";

const Login = () => {
    return (
        <S.Login>
                <BgDefault/>
            <S.LoginContent>
                {/* <S.LoginLogo></S.LoginLogo> */}
                <S.LoginForm>
                    
                        <p>Username</p>
                        <S.LoginInput >
                        </S.LoginInput>
                   
                    
                        <p>Password</p>
                        <S.LoginInput >
                        </S.LoginInput>
                   

                </S.LoginForm>
            </S.LoginContent>

        </S.Login>
    );
};

export default Login;