import BgDefault from "components/BgDefault";
// import Header from "components/Header";
// import GameCard from "components/GameCard";
// import GenreCard from "components/GenreCard";
// import { gameService } from "services/gameService";
// import { useNavigate } from "react-router-dom";
import * as S from "./style";
import { useEffect, useState } from "react";
import { Game } from "types/gametypes";
import { Genre } from "types/genretypes";

import { useGames } from "context/games";
import { mockedGenres } from "mocks/genres";
import { mockedGames } from "mocks/games";
import { GameList } from "components/Favorites/style";
import GameCard from "components/GameCard";

const Home = () => {
   const { games } = useGames();

   const [selectGame, setSelectGame] = useState<Game>(
    mockedGames[0]
   );

   const [genre, setGenre] = useState<Genre>(mockedGenres[0] || null);

   const filterGames: Game[] = games.filter(
    (element) => element.id === selectGame.id
  );

    return (
        <S.Home>

            {/* <Header/> */}
            <BgDefault/>            
            <S.HomeSection>
            <GameList>
                {games.map((element) => (
                    <GameCard key={element.id} game={element}/>
                        ))}
                </GameList>             
            </S.HomeSection>
            
            <S.HomeGenres>
               
                </S.HomeGenres>            
        </S.Home>
    )
}

export default Home;
