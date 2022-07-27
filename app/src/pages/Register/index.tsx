import BgDefault from 'components/BgDefault';
import ButtonBack from 'components/ButtonBack';

import React from 'react'
import { useState } from 'react';
import { registerService } from '../../services/authService';
import { Link, useNavigate } from 'react-router-dom';
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
      navigate('/profiles')
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
        <S.LoginLogo src={logoxxt}/>
        <S.RegisterTitle>Faça seu Cadastro</S.RegisterTitle>

        
        <input 
        type='text' 
        name='nickname'
        onChange={handleChangeValues}
        placeholder='nickname'
        ></input>

        
        <input
        type='email' 
        name='email'
        onChange={handleChangeValues}
        placeholder='e-mail@example.com'
        ></input>

        
        <input type='text'
        name='cpf'
        onChange={handleChangeValues}
        placeholder='12312312312'
        ></input>

        
        <input 
        type='password' 
        name='password'
        onChange={handleChangeValues}
        placeholder='********'
        ></input>

        
        <input 
        type='password' 
        name='confirmPassword'
        onChange={handleChangeValues}
        placeholder='********'
        ></input>
        <S.divButton>
          
          <Link to='/'><ButtonBack /></Link>
          <S.ButtonSignin onClick={registerUser}>Cadastrar</S.ButtonSignin>

        </S.divButton >
        </S.RegisterForm>
      </S.RegisterBox>
    </S.RegisterContent>
  )
}

export default Register