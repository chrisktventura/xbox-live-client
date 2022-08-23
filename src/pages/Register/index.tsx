import BgDefault from 'components/BgDefault';
import React from 'react'
// import { useState } from 'react';

// import { useAuth } from '../../context/auth';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import * as S from "./style";
import { api } from 'services/api';
const logoxxt = require("assets/images/logoxxt.png");

interface userRegisterData {
  nickname: string;
  email: string;
  cpf: string;
  password: string;
  confirmPassword: string;
  isAdmin: boolean;
}

const registerSchema = yup.object().shape({
  nickname: yup
    .string().uuid('O nickname deve conter apenas letras e números')
    .required('Campo de nickname obrigatório'),

  email: yup
    .string()
    .email('E-mail inválido')
    .required('Campo de e-mail obrigatório'),

  cpf: yup
    .number()
    .required('Campo de cpf obrigatório'),

  password: yup
    .string()
    .required('Campo de senha obrigatório'),
  
  confirmPassword: yup
    .string()
    .required('Campo de confirmação de senha obrigatório')
    .test('passwords-match', 'As senhas não conferem', function (password) {
      return this.parent.password === password;
    }),
});

const Register = () => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm<userRegisterData>({ resolver: yupResolver(registerSchema) });

  let navigate = useNavigate();



  const registerUser = (data: userRegisterData) => {
    api.post('/auth/users', data)
    .then((res) =>{
      (data.nickname ? navigate('/login') : swal('Usuário cadastrado com sucesso'));
    })
    .catch(() => {
      swal(errors.nickname?.message || 'Erro ao cadastrar usuário');
    });


  }
  return (
    <S.RegisterContent>

      <BgDefault />
      <S.RegisterBox>
        <S.RegisterForm onSubmit={() => handleSubmit}>
          <S.LoginLogo src={logoxxt} />
          <S.RegisterTitle>Faça seu Cadastro</S.RegisterTitle>

          <input
            type='text'
            {...register('nickname')}
            placeholder='nickname'
          ></input>

          <input
            type='email'
           {...register("email")}
            placeholder='e-mail@example.com'
          ></input>


          <input type='text'
            {...register('cpf')}
            placeholder='12312312312'
          ></input>

          <input
            type='password'
           {...register('password')}
            placeholder='********'
          ></input>


          <input
            type='password'
           {...register('confirmPassword')}
            placeholder='********'
          ></input>

          <select  {...register('isAdmin')}>
            <option value="false">Not Admin</option>
            <option value="true">Is Admin</option>
          </select>

          <S.divButton>

            <Link to='/'><S.ButtonBack>Voltar</S.ButtonBack></Link>
            <S.ButtonSignin onSubmit={() => registerUser}>Cadastrar</S.ButtonSignin>

          </S.divButton >
        </S.RegisterForm>
      </S.RegisterBox>
    </S.RegisterContent>
  )
}

export default Register