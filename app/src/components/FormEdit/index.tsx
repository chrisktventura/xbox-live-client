import React from 'react'
import * as S from './style'

const FormEdit = () => {
  return (

    <S.EditMain>
    <S.FormEdit>
      <S.FormEditTitle>
        Editar Jogo
      </S.FormEditTitle>
      <S.InputEdit type='text' name='title' placeholder='O nome do Jogo' />
      <S.InputEdit type='text' name='coverImageUrl' placeholder='Imagem Url do Jogo' />
      <S.InputEdit type='text' name='description' placeholder='Descrição' />
      <S.InputEdit type='number' name='year' placeholder='Ano de Lançamento' />
      <S.InputEdit type='number' name='imdbScore' placeholder='IMDB Score' />
      <S.InputEdit type='text' name='urlTrailerYT' placeholder='URL trailer do Jogo' />
      <S.InputEdit type='text' name='urlGameplayYT' placeholder='URL gameplay do Jogo' />
      <S.InputEdit type='text' name='genreName' placeholder='Gênero' />
    </S.FormEdit>

    <S.FormEdit>
    <S.FormEditTitle>
        Editar Gênero
      </S.FormEditTitle>

      <S.InputEdit type='text' name='genre' placeholder='Nome do Gênero' />
      <S.InputEdit type='text' name='id' placeholder='' />

    </S.FormEdit>



    </S.EditMain>
  )
}

export default FormEdit