import BgDefault from 'components/BgDefault';
import ButtonBack from 'components/ButtonBack';
import ButtonSignin from 'components/ButtonSignin';
import React from 'react'

import * as S from "./style";
const logoxxt = require("assets/images/logoxxt.png");

const Register = () => {
  return (
    <S.RegisterContent>
      
      <BgDefault />
      <S.RegisterBox>
        <S.RegisterForm>
        <S.LoginLogo src={logoxxt}></S.LoginLogo>
        <S.RegisterTitle>Faça seu Cadastro</S.RegisterTitle>

        <label htmlFor="">Username</label>
        <input type='text'></input>

        <label htmlFor="">Email</label>
        <input type='email'></input>

        <label htmlFor="">CPF</label>
        <input type='text'></input>

        <label htmlFor="">Password</label>
        <input type='password'></input>

        <label htmlFor="">Confirm Password</label>
        <input type='password'></input>
        <S.divButton>
          
          <ButtonBack/>
          <ButtonSignin/>

        </S.divButton>
        </S.RegisterForm>
      </S.RegisterBox>
    </S.RegisterContent>
  )
}

export default Register