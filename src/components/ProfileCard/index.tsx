import { useProfile } from 'context/profiles';
import { Profile } from 'types/profiletypes';
import { BiEdit } from 'react-icons/bi'

import * as S from './style'
import { useEffect, useState } from 'react';
import { api } from 'services/api';
import { useNavigate } from 'react-router-dom';

interface ProfileCardProps {
  profile: Profile[];
}

const ProfileCard = ({ profile }: ProfileCardProps) => {  
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const navigate = useNavigate();


  

  const { profiles } = useProfile();
const editIcon = <BiEdit size={20} />

  return (
  <>
    <button>X</button>
    {profiles.map((element) => (
      <S.ProfileCard>
        <S.ProfileAvatar src={element?.imageURL} />
        <S.ProfileName>{element?.name}</S.ProfileName>
        <S.ProfileBtnEdit  >{editIcon}</S.ProfileBtnEdit>
      </S.ProfileCard>
    ))}
  </>
  )
}

export default ProfileCard;

