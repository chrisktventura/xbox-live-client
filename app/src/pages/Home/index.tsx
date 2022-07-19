
import BgDefault from "components/BgDefault";
import Header from "components/Header";
import GameCard from "components/GameCard";
import * as S from "./style";

const Home = () => {
    return (
        <S.Home>

            <Header/>
            <BgDefault/>            
            <S.HomeSection>
                <GameCard></GameCard>
            </S.HomeSection>
            
        </S.Home>
    )
}

export default Home;