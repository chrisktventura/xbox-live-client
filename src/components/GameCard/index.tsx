import * as S from './style'
import React from 'react' 
// { useState, 
//   useEffect } 
import { Game } from 'types/gametypes'

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (

    <S.GameCardContent>
      <S.GameCardImage
        src={`${game.coverImageUrl}`} />
      <S.GameCardTitle>${game.title}</S.GameCardTitle>
      <S.GameCardYear>${game.year}</S.GameCardYear>
      <S.GameCardImdb>${game.imdbScore}</S.GameCardImdb>
    </S.GameCardContent>
  )
}

export default GameCard;