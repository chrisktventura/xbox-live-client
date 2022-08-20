import React from 'react'
import * as S from './style'
import { Genre } from 'types/genretypes'

interface GenreCardProps{
  genre: Genre;
}

const GenreCard = ({ genre }: GenreCardProps) => {
  return (
    <S.GenreCard>
      <S.GenreCardTitle>{genre.name}</S.GenreCardTitle>
    </S.GenreCard>
  )
}

export default GenreCard;