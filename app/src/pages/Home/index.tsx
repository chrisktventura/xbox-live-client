
import BgDefault from "components/BgDefault";
import Header from "components/Header";
import GameCard from "components/GameCard";
import * as S from "./style";
import { useEffect, useState } from "react";
import { Game } from "types/gametypes";
import { GameService } from "services/gameService";

const Home = () => {

    const [game, setGame] = useState<Game[]>([]);

    useEffect(()=>{
        fetch(GameService.allGames('/games'))
        .then(res => res.json())
        .then(data => setGame(data))
    })
    return (
        <S.Home>

            <Header/>
            <BgDefault/>            
            <S.HomeSection>
            {game.map(game => (
                <GameCard title={`${game.title}`} image={""} year={0} imdb={0}/>
                ))}
            </S.HomeSection>
            
        </S.Home>
    )
}

export default Home;