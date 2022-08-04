import React, { useState, useEffect } from 'react'
import BgDefault from 'components/BgDefault'
import * as S from './style'
import { BiEdit } from 'react-icons/bi'
import { Profile } from 'types/profiletypes'
import { profileServices } from 'services/profileService'
import { User } from 'types/usertypes'
import { useNavigate } from 'react-router-dom'
import { userService } from 'services/userService'
import { userLoggedService } from 'services/authService'



const Profiles = () => {
 
  const navigate = useNavigate();

  const [ profile, setProfile ] = useState<Profile[]>([]);
  const [ userLogged, setUserLogged ] = useState<User>({
    id: "",
    nickname: "",
    email: "",
    password: "",
    confirmPassword: "",
    cpf: "",    
  });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const upUser: upUser = {
      name: event.currentTarget.Name.value,
      email: event.currentTarget.email.value,
      password: event.currentTarget.password.value,
      confirmPassword: event.currentTarget.confirmPass.value,
    };
    await userService.UpUser(userLogged.id, upUser);
    swall({
      title: "Certinho!",
      text: "Usuário alterado com sucesso!",
      icon: "success",
      timer: 3000,
    });
    closeModal();
    getUserLogged();
  }
  useEffect(() => {
    getUserLogged();
    getAllProfiles();
  }, []);
  const jwt = localStorage.getItem("jwt");

  const getUserLogged = async () => {
    const response = await userLoggedService.userLogged();

    localStorage.setItem("idUser", response.data.id);
    setUserLogged(response.data);
  };

  const getAllProfiles = async () => {
    if (!jwt) {
      swall({
        title: "ERRO!",
        text: "Faça o login antes de entrar na página de profiles",
        icon: "error",
        timer: 7000,
      });
      navigate("/");
    } else {
      const response = await profileServices.allProfiles(idUser);

      setProfile(response.data);

      if (profiles) {
        findProfiles(response.data);
      }
    }
  };

  const editIcon = <BiEdit size={20} />
  return (
    <S.ProfileMain>
      <BgDefault />

      <S.ProfileSection>
        {/*  */}
        <S.ProfileCard>
          <S.ProfileAvatar src="https://avatars.githubusercontent.com/u/96752298?v=4" alt="foto de perfil" />
          <S.ProfileName>{profile.name}</S.ProfileName>
          <S.ProfileBtnEdit>{editIcon}</S.ProfileBtnEdit>
        </S.ProfileCard>
        
      </S.ProfileSection>

    </S.ProfileMain>
  )
}

export default Profiles