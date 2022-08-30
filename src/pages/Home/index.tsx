import BgDefault from "components/BgDefault";
// import Header from "components/Header";
import { gameService } from "services/gameService";
// import { useNavigate } from "react-router-dom";
import * as S from "./style";
import { useEffect, useState } from "react";
import { Game } from "types/gametypes";
import { Genre } from "types/genretypes";
import { useGames } from "context/games";
import { GameList } from "components/Favorites/style";
import GameCard from "components/GameCard";
import GenreCard from "components/GenreCard";
import GenreList from "components/GenreList";
import { User } from "types/usertypes";
import { api } from "services/api";
import { Favorite } from "types/favtypes";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { games } = useGames();

  const back = require('assets/icons/back.svg')
  
  const navigate = useNavigate()
  function goToStart() {
    navigate('/profile')
  }
  
    return (
        <S.Home>

            {/* <Header/> */}
            <BgDefault/>        
            <S.BackButton>
              <img src={back} onClick={goToStart} alt='voltar' />
              </S.BackButton>    
            <S.HomeSection>
            <GameList>
                {games.map((element) => (
                    <GameCard key={element.id} game={element}/>
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
