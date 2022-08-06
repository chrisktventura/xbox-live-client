import React, { useState, useEffect } from 'react'
import BgDefault from 'components/BgDefault'
import * as S from './style'
import { BiEdit } from 'react-icons/bi'
import { Profile } from 'types/profiletypes'
import { profileServices } from 'services/profileService'
import { User, UserEdit } from 'types/usertypes'
import { useNavigate } from 'react-router-dom'
import { userService } from 'services/userService'
import { userLoggedService } from 'services/authService'
import swall from 'sweetalert'
import { Modal } from 'react-bootstrap'



const Profiles = () => {

  const navigate = useNavigate();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  const [profile, setProfile] = useState<Profile[]>([]);

  const [userLogged, setUserLogged] = useState<User>({
    id: "",
    nickname: "",
    email: "",
    password: "",
    confirmPassword: "",
    cpf: "",
  });



  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const userEdit: UserEdit = {
      nickname: event.currentTarget.nickname.value,
      password: event.currentTarget.password.value,
      confirmPassword: event.currentTarget.confirmPassword.value,
    };
    await userService.updateUser(userLogged.id, userEdit);
    swall({
      title: "Sucess!",
      text: "Usuário alterado com sucesso!",
      icon: "success",
      timer: 3000,
    });
    closeModal();
    getUserLogged();
  }

  useEffect(() => {
    getUserLogged();
  }, []);

  const custonStyle = {
    content: { 

   },

  }


  const jwt = localStorage.getItem("jwt");

  const getUserLogged = async () => {
    const response = await userLoggedService.userLogged();

    localStorage.setItem("idUser", response.data.id);
    setUserLogged(response.data);
  };

  function logout() {
    setUserLogged({
      id: "",
      nickname: "",
      email: "",
      password: "",
      confirmPassword: "",
      cpf: "",
    })
    localStorage.removeItem(`jwt`)

    swall({
      title: "Certinho!",
      text: "Usuário deslogado com sucesso!",
      icon: "success",
      timer: 5000,

    })
    navigate('/')
  }

  const editIcon = <BiEdit size={20} />
  return (
    <S.ProfileMain>
      <BgDefault />

      <S.ProfileSection>
        {/*  */}
        <S.ProfileCard>
          <S.ProfileAvatar src={profile.imageURL} />
          <S.ProfileName>{profile.name}</S.ProfileName>
          <S.ProfileBtnEdit onChange={openModal} >{editIcon}</S.ProfileBtnEdit>
        </S.ProfileCard>

      </S.ProfileSection>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={custonStyle}>
        <Modal.Title>Editar Perfil</Modal.Title>
      </Modal>

    </S.ProfileMain>
  )
}

export default Profiles