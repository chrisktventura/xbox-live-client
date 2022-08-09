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

const Home = () => {
    const [game, setGame] = useState<Game[]>([]);  
    const [genre, setGenre] = useState<Genre[]>([]);

    return (
        <S.Home>

            <Header/>
            <BgDefault/>            
            <S.HomeSection>
            {game.map(game => (
                <GameCard title={`${game.title}`} image={`${game.coverImageUrl}`} year={`${game.year}`} imdbScore={`${game.imdbScore}`}/>
                ))}
            </S.HomeSection>
            
            <S.HomeGenres>
                {genre.map(genre =>(
                <div>
                  <GenreCard name={genre.name}/>
                </div>                 
                ))}
               
                </S.HomeGenres>            
        </S.Home>
    )
}

export default Home;
