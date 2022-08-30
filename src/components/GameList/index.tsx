import * as S from './style'
import { Game } from '../../types/gametypes'
import GameCard from 'components/GameCard';

interface GamesListProps {
    game: Game[];

  }

const GamesList = ({game}: GamesListProps) => {
  return (
    <S.GameListContainer>
        {game.map((element) => (
            <GameCard
            game={element} 
            key={element.id}             
            />
        ))}
    </S.GameListContainer>
  )
}

export default GamesList;