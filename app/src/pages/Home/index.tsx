import BgDefault from "components/BgDefault";
import Header from "components/Header";
import GameCard from "components/GameCard";
import GenreCard from "components/GenreCard";
import * as S from "./style";
import { useEffect, useState } from "react";
import { Game } from "types/gametypes";
import { gameService } from "services/gameService";
import { useNavigate } from "react-router-dom";
import { Genre } from "types/genretypes";

import { useGames } from "context/games";
import { mockedGenres } from "mocks/genres";
import { mockedGames } from "mocks/games";

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
            {games.map(element => (
                <GameCard
                 title={`${element.title}`} 
                 image={`${element.coverImageUrl}`}
                 year={`${element.year}`} 
                 imdbScore={`${element.imdbScore}`}
                 onClick={() => setSelectGame(element)}
                 />
                ))}
            </S.HomeSection>
            
            <S.HomeGenres>
                {/* {genre.map(element =>(
                <div>
                  <GenreCard key={setGenre} name={element.name}/>
                </div>                 
                ))} */}
               
                </S.HomeGenres>            
        </S.Home>
    )
}

export default Home;
