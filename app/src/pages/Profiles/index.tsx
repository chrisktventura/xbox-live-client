import React, { useState, useEffect } from 'react'
import BgDefault from 'components/BgDefault'
import * as S from './style'
import { BiEdit } from 'react-icons/bi'
import { Profile } from 'types/profiletypes'
import { User } from 'types/usertypes'
import { useNavigate } from 'react-router-dom'

const Profiles = () => {
 
  const navigate = useNavigate();

  const [ profile, setProfile ] = useState<Profile[]>([]);
  const [ userLogged, setUserLogged ] = useState<User[]>([]);

  const editIcon = <BiEdit size={20} />
  return (
    <S.ProfileMain>
      <BgDefault />

      <S.ProfileSection>
        
        <S.ProfileCard>
          <S.ProfileAvatar src="https://avatars.githubusercontent.com/u/96752298?v=4" alt="" />
          <S.ProfileName>Chris</S.ProfileName>
          <S.ProfileBtnEdit>{editIcon}</S.ProfileBtnEdit>
        </S.ProfileCard>
        
      </S.ProfileSection>

    </S.ProfileMain>
  )
}

export default Profiles