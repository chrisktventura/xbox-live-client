import React from 'react'
import * as S from "./style";
const logo = require("assets/images/logo.png");


const Header = () => {
  return (

    <S.HeaderContainer>
        <S.HeaderLogo>
          <img src={logo} alt="logo" />
        </S.HeaderLogo>
      <S.HeaderAvatar>
        <img src="https://cdn.pixabay.com/photo/2021/02/18/20/52/goku-6028390_1280.png" alt="" />
      </S.HeaderAvatar>
    </S.HeaderContainer>

  )
}

export default Header;