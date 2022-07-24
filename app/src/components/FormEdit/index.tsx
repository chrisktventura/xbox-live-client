import React from 'react'
import * as S from './style'

const FormEdit = () => {
  return (
    <S.FormEdit>
      <S.FormEditTitle>
        Editar Jogo
      </S.FormEditTitle>
      <S.InputEdit type='text' name='title' placeholder='O nome do Jogo' />
      <S.InputEdit type='url' name='coverImageUrl' placeholder='Imagem Url do Jogo' />
      <S.InputEdit type='text' name='description' placeholder='Descrição' />
      <S.InputEdit type='year' name='year' placeholder='Ano de Lançamento' />
      <S.InputEdit type='text' name='imdbScore' placeholder='IMDB Score' />
      <S.InputEdit type='url' name='urlTrailerYT' placeholder='URL trailer do Jogo' />
      <S.InputEdit type='url' name='urlGameplayYT' placeholder='URL gameplay do Jogo' />
      <S.InputEdit type='text' name='genreName' placeholder='Gênero' />
    </S.FormEdit>
  )
}

export default FormEdit