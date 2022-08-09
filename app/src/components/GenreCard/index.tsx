import React from 'react'
import * as S from './style'
import { Genre } from 'types/genretypes'



const GenreCard = (genre: Genre) => {


  return (
    <S.GenreCard>
      <S.GenreCardTitle>{genre.name}</S.GenreCardTitle>
    </S.GenreCard>
  )
}

export default GenreCard;