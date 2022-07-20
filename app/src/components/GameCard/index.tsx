import * as S from './style'
import React, { useState, useEffect } from 'react'

interface GameCardProps {
  title: string;
  image: string;
  year: number;
  imdb: number;
}

const GameCard = (game: GameCardProps) => {
  return (



        <S.GameCardContent>

          <S.GameCardImage src={`${game.image}`} />

          <S.GameCardTitle>${game.title}</S.GameCardTitle>

          <S.GameCardYear>${game.year}</S.GameCardYear>

          <S.GameCardImdb>${game.imdb}</S.GameCardImdb>



        </S.GameCardContent>

  )
}

export default GameCard;