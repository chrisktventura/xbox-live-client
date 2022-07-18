import BgDefault from 'components/BgDefault';
import ButtonBack from 'components/ButtonBack';
import ButtonSignin from 'components/ButtonSignin';
import React from 'react'
import { SyntheticEvent, useState } from 'react';
import { registerService } from '../../services/authService';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert'

import * as S from "./style";
const logoxxt = require("assets/images/logoxxt.png");

interface userObj {
  nickname: string;
  email: string;
  cpf: string;
  password: string;
  confirmPassword: string;
}

const Register = () => {
  const [values, setValues] = useState({
    nickname: '',
    email: '',
    cpf: '',
    password: '',
    confirmPassword: '',
  })

  let navigate = useNavigate();

  const handleChangeValues = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues((values: userObj) => ({
      ...values,
      [event.target.name]: event.target.value
    }))
  };

  const registerUser = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const response = await registerService.registerValues(values);
    const jwt = response.data.token;

    if(jwt) {
      localStorage.setItem('jwt', jwt);
      swal({
        title: 'Usuário cadastrado com sucesso !',
        icon: "success",
        timer: 7000,
      })
      navigate('/')
    }else {
      swal({
        title: 'Erro!',
        text: `${response.data.message}`,
        icon: 'error',
        timer: 7000
      })
    }

  }
  return (
    <S.RegisterContent>
      
      <BgDefault />
      <S.RegisterBox>
        <S.RegisterForm onSubmit={registerUser}>
        <S.LoginLogo src={logoxxt}></S.LoginLogo>
        <S.RegisterTitle>Faça seu Cadastro</S.RegisterTitle>

        <label htmlFor="">Username</label>
        <input 
        type='text' 
        name='nickname'
        onChange={handleChangeValues}
        ></input>

        <label htmlFor="">Email</label>
        <input
        type='email' 
        name='email'
        onChange={handleChangeValues}
        ></input>

        <label htmlFor="">CPF</label>
        <input type='text'
        name='cpf'
        onChange={handleChangeValues}
        ></input>

        <label htmlFor="">Password</label>
        <input 
        type='password' 
        name='password'
        onChange={handleChangeValues}
        ></input>

        <label htmlFor="">Confirm Password</label>
        <input 
        type='password' 
        name='confirmPassword'
        onChange={handleChangeValues}
        ></input>
        <S.divButton>
          
          <ButtonBack/>
          <ButtonSignin/>

        </S.divButton >
        </S.RegisterForm>
      </S.RegisterBox>
    </S.RegisterContent>
  )
}

export default Register