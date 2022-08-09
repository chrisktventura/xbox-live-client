import React, { useState, useEffect } from 'react'
import BgDefault from 'components/BgDefault'
import * as S from './style'
import { BiEdit } from 'react-icons/bi'
import { Profile, ProfileEdit } from 'types/profiletypes'
import { profileServices } from 'services/profileService'
import { User, UserEdit } from 'types/usertypes'
import { useNavigate } from 'react-router-dom'
import { userService } from 'services/userService'
import { userLoggedService } from 'services/authService'
import swall from 'sweetalert'
import { Modal } from 'react-bootstrap'

const Profiles = () => {

  const [profile, setProfile] = useState<Profile[]>([])

  const [profileEdit, setProfileEdit] = useState<ProfileEdit>({
    name: '',
    imageURL: '',
  });

  const [user, setUser] = useState<User>({
    id: '',
    nickname: '',
    email: '',
    password: '',
    confirmPassword: '',
    cpf: '',
  })

  const [userEdit, setUserEdit] = useState<UserEdit>({
    nickname: '',
    password: '',
    confirmPassword: '',
  })

  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal () {
    setModalIsOpen(true);
  }

  function closeModal (){
    setModalIsOpen(false);
  }

  const getUserLogged = () => {
    const response = userLoggedService.userLogged();

    localStorage.setItem("idUser", response.data.id);
    getUserLogged();
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const upUser: UserEdit = {
      nickname: event.currentTarget.nickname.value,
      password: event.currentTarget.password.value,
      confirmPassword: event.currentTarget.confirmPassword.value,
    };
    await userService.updateUser(getUserLogged.id, upUser);
    swall({
      title: "Certinho!",
      text: "Usuário alterado com sucesso!",
      icon: "success",
      timer: 3000,
    });
    closeModal();
    getUserLogged();
  }

  const custonStyle = {
    width: "100%",
    height: "100%",

  };

  useEffect(() => {
    getUserLogged();
  }, []);




const editIcon = <BiEdit size={20} />

return (

  <S.ProfileMain>
    <BgDefault />

    <S.ProfileSection>

      <S.ProfileCard>
        <S.ProfileAvatar src={profile.imageURL} />
        <S.ProfileName>{profile.name}</S.ProfileName>
        <S.ProfileBtnEdit onChange={openModal} >{editIcon}</S.ProfileBtnEdit>
      </S.ProfileCard>

    </S.ProfileSection>

    <Modal
      isOpen={openModal}
      onRequestClose={closeModal}
      style={custonStyle}
      key='index'>
      <S.ModalContent>

        <Modal.Title>Editar Perfil</Modal.Title>

        <S.ModalForm onSubmit={handleSubmit}>
          <input type="text" name="nickname" placeholder="Nome" />
          <input type="password" name="password" placeholder="Senha" />
          <input type="password" name="confirmPassword" placeholder="Confirmar Senha" />
          <S.ModalBtn type="submit" value="Salvar" />
        </S.ModalForm>

        <S.ModalBtn onClick={closeModal} value="Cancelar" />


      </S.ModalContent>



    </Modal>

  </S.ProfileMain>
)
}


export default Profiles