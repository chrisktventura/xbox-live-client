import * as S from './style'
import React from 'react'

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const GameCard = () => {
  return (
    <S.GameCardContent>
      
      <S.GameCardImage src='https://i.ytimg.com/vi/TeO3Vaju8lg/sddefault.jpg'/>

      <S.GameCardTitle>Street Chaves</S.GameCardTitle>

      <S.GameCardYear>2019</S.GameCardYear>

      <S.GameCardImdb>4</S.GameCardImdb>

      
    
    </S.GameCardContent>
  )
}

export default GameCard