import * as S from './style'
import { Game } from '../../types/gametypes'
import GameCard from 'components/GameCard';

interface GamesListProps {
    game: Game[];
    isFavoritesList: boolean;
    handleGetFavorites: () => void;
  }

const GamesList = ({ 
  game,
  isFavoritesList,
  handleGetFavorites,
 }: GamesListProps) => {
  return (
    <S.GameListContainer>
        {game.map((element) => (
            <GameCard
            game={element} 
            key={element.id} 
            isFavoritesList={isFavoritesList}
            handleGetFavorites={handleGetFavorites}            
            />
        ))}
    </S.GameListContainer>
  )
}

export default GamesList;