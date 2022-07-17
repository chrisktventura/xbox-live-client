import React from 'react'
import { Link } from 'react-router-dom';
import * as S from './style'

const ButtonBack = () => {
  return (
    <S.ButtonBack><Link to='/'>Voltar</Link></S.ButtonBack>
  )
}

export default ButtonBack;