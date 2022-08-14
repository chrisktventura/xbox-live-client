import React, { useState, useEffect } from 'react'
import * as S from "./style";
import { Profile } from 'types/profiletypes'
import { profileServices } from 'services/profileService';
import { Link } from 'react-router-dom';
import { Fav } from 'types/favtypes';
import { Game } from 'types/gametypes';
import FavoritesGameCards from 'components/Favorites';
const logo = require("assets/images/logo.png");

interface Props {
  game: Game[];
  profile: Profile[];
}

const Header = (props: Props) => {

  const [profile, setProfile] = useState<Profile>();

  const [game, setGame] = useState<Game>();

  useEffect(() => {    
  },[setProfile]);


  return (

    <S.HeaderContainer>
        <S.HeaderLogo>
          <img src={logo} alt="logo" />
        </S.HeaderLogo>
      <S.HeaderAvatar>
        <img src={profile?.imageURL} alt="" />
      </S.HeaderAvatar>
      
      <h1>Favoritos</h1>

      <FavoritesGameCards/>
      
      <S.HeaderFooter>
      <S.BtnLogout >Logout</S.BtnLogout>
      </S.HeaderFooter>

    </S.HeaderContainer>

  )
}

export default Header;