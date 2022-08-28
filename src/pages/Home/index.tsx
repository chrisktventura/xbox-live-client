import BgDefault from "components/BgDefault";
// import Header from "components/Header";
import { gameService } from "services/gameService";
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
import GenreCard from "components/GenreCard";
import GenreList from "components/GenreList";
import { User } from "types/usertypes";
import { api } from "services/api";
import { Favorite } from "types/favtypes";

const Home = () => {
   const { games } = useGames();

   const [isFavoritesList, setIsFavoritesList] = useState<boolean>(false);
   const [userFavoritesList, setUserFavoritesList] = useState<Game[]>([]);
   
   const handleGetFavorites = async () => {
    const token = localStorage.getItem("token");

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const user: User = JSON.parse(localStorage.getItem("user") || "");

    const res = await api.get<Favorite[]>(
      `/favorites/user/${user?.id}`,
      headers
    );

    const favorites = res.data;

    const favoritesNames: string[] = favorites.map((elem) => elem.gameName);

    const favoritesList: Game[] = games.filter((elem) => {
      return favoritesNames.includes(elem.title);
    });

    setUserFavoritesList(favoritesList);
  };

   const [selectGame, setSelectGame] = useState<Game>(
    mockedGames[0]
   );

   const [genre, setGenre] = useState<Genre>(mockedGenres[0] || null);

   const filterGames: Game[] = games.filter(
    (element) => element.id === selectGame.id
  );
    
  useEffect(() => {
    handleGetFavorites();
  }, [games, isFavoritesList]);

    return (
        <S.Home>

            {/* <Header/> */}
            <BgDefault/>            
            <S.HomeSection>
            <GameList>
                {games.map((element) => (
                    <GameCard key={element.id} game={element} isFavoritesList={isFavoritesList} handleGetFavorites={handleGetFavorites}/>
                        ))}
                </GameList>             
            </S.HomeSection>
            
            <S.HomeGenres>
                <GenreList genre={[]}/>                            
                </S.HomeGenres>            
        </S.Home>
    )
}


export default Home;
