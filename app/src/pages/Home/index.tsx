import BgDefault from "components/BgDefault";
import Header from "components/Header";
import GameCard from "components/GameCard";
import * as S from "./style";
import { useEffect, useState } from "react";
import { Game } from "types/gametypes";
import { gameService } from "services/gameService";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();


    const [game, setGame] = useState<Game[]>([]);

    

    useEffect(() => {
  
      }, []);
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
                <div>
                    
                </div>
                </S.HomeGenres>            
        </S.Home>
    )
}

export default Home;
