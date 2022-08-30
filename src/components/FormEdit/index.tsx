import React, { useEffect, useState } from 'react'
import * as S from './style'
import { gameService } from 'services/gameService'
import { Game } from 'types/gametypes'
import { Genre } from 'types/genretypes'

const FormEdit = () => {

  const [game, setGame] = useState<Game>();
  const [genre, setGente] = useState<Genre>();

  return (
    <S.EditMain>

     <S.EditContainer>
      <S.EditLeft>
    <S.FormEdit>
      <S.FormEditTitle>
        {!game ? 'Editar Jogo' : 'Criar jogo'}
      </S.FormEditTitle>
      <S.InputEdit type='text' name='title' placeholder='O nome do Jogo' />
      <S.InputEdit type='text' name='coverImageUrl' placeholder='Imagem Url do Jogo' />
      <S.InputEdit type='text' name='description' placeholder='Descrição' />
      <S.InputEdit type='number' name='year' placeholder='Ano de Lançamento' />
      <S.InputEdit type='number' name='imdbScore' placeholder='IMDB Score' />
      <S.InputEdit type='text' name='urlTrailerYT' placeholder='URL trailer do Jogo' />
      <S.InputEdit type='text' name='urlGameplayYT' placeholder='URL gameplay do Jogo' />
      <S.InputEdit type='text' name='genreName' placeholder='Gênero' />


    <button>atualizar</button>
      <button>apagar</button>

    </S.FormEdit>
    </S.EditLeft>


    <S.EditRight>
    <S.FormEdit>
    <S.FormEditTitle>
        Inserir Gênero
      </S.FormEditTitle>

      <S.InputEdit type='text' name='genre' placeholder='Nome do Gênero' />     
      <button type='submit' >inserir</button>

    </S.FormEdit>

    <S.FormEdit>
    <S.FormEditTitle>
      Atualizar Gênero
    </S.FormEditTitle>

    <S.InputEdit type='text' name='genre' placeholder='Nome do Gênero' />
    
<button type='submit' >atualizar</button>
    </S.FormEdit>
      </S.EditRight>

    </S.EditContainer>

  </S.EditMain>
  )
}

export default FormEdit