import * as S from "./style";
import { Profile } from 'types/profiletypes'
import { profileServices } from 'services/profileService';
import { Link } from 'react-router-dom';
import { Fav } from 'types/favtypes';
import { Game } from 'types/gametypes';
import { useEffect, useState } from "react";




const FavoritesGameCards = () => {

    const [profile, setProfile] = useState<Profile[]>([]);
    const [game, setGame] = useState<Game[]>([]);
    const [fav, setFav] = useState<Fav[]>([]);

    useEffect(() => {
        const getProfile = async (id: string) => {
            const response = await profileServices.findProfileById(id);
            setProfile(response.userId);
        }
        getProfile('userId');
    } ,[setProfile]);

    return (

        
        <S.GameList>
                  {fav.map((fav, index) => (
      <div className='fav-container'>
        <Link to={'/details'}>
          <div className='fav-img'>
            <img src alt="imagem do card favorito" />
          </div>
          <div className='fav-name'>
            <p>TITULO DO JOGO</p>
            <span>
              ANO DO JOGO
            </span>
              <p>GENERO DO JOGO</p>
          </div>
        </Link>
        </div>
        ))}
     


            </S.GameList>
    )
}

export default FavoritesGameCards;