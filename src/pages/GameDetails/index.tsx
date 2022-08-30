import * as S from './styles'
import BgDefault from 'components/BgDefault';
import { Game } from 'types/gametypes';

import React from 'react'
import { api } from 'services/api';
import { gameService } from 'services/gameService';

interface GameDetailsProps{
  game?: Game;
  handleGetGame: () => void;
}

const GameDetails = ({game, handleGetGame}: GameDetailsProps) => {

  handleGetGame = () => {
    gameService.gameById(`id`)
  }
  return (

    <S.GameDetailsContainer>
          <BgDefault/>
            <S.GameDetails>

            <S.GameDetailsTitle>
            </S.GameDetailsTitle>

            <S.UrlGame src={game?.urlGameplayYT}/>
            <S.UrlGame src={game?.urlTrailerYT}/>
            
            <S.GameDetailsDescription>{game?.description}</S.GameDetailsDescription>

            <S.GameDetailsScore></S.GameDetailsScore>
            </S.GameDetails>

            
        </S.GameDetailsContainer>
  )
}

export default GameDetails