import React from 'react'
import * as S from './styles'
import { Genre } from '../../types/genretypes'
import GenreCard from 'components/GenreCard'

interface GenreListProps {
    genre: Genre[];
}

const GenreList = ({ genre }: GenreListProps) => {
  return (
    <S.GenreListContainer>
      {genre.map((element) => (
      <GenreCard key={element.id} genre={element} />
      ))}    
    </S.GenreListContainer>
  )
}

export default GenreList