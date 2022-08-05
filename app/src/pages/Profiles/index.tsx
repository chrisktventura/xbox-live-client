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

  const [ profile, setProfile ] = useState<Profile[]>([]);

  const [ userLogged, setUserLogged ] = useState<User>({
    id: "",
    nickname: "",
    email: "",
    password: "",
    confirmPassword: "",
    cpf: "",    
  });

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "rgba(0,0,0,0.8)",
      borderRadius: "1rem",
    },
  };

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
    allProfiles();
  }, []);


  const jwt = localStorage.getItem("jwt");

  const getUserLogged = async () => {
    const response = await userLoggedService.userLogged();

    localStorage.setItem("idUser", response.data.id);
    setUserLogged(response.data);
  };

  function logout (){
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
          <S.ProfileAvatar src={profile.imageURL}/>
          <S.ProfileName>{profile.name}</S.ProfileName>
          <S.ProfileBtnEdit onChange={openModal} >{editIcon}</S.ProfileBtnEdit>
        </S.ProfileCard>
        
      </S.ProfileSection>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <S.buttonModal>
          <button onClick={closeModal}>
            <AiOutlineRollback size={25} color="rgba(183,41,109,0.5)" />
          </button>
        </S.buttonModal>
        <S.UserModal onSubmit={handleSubmit}>
          <S.userModalTitle>Update User</S.userModalTitle>
          <label htmlFor="name">Name:</label>
          <input type="text" name="Name" defaultValue={userLogged.nickname} />
          <label htmlFor="email">Email:</label>
          <input type="text" name="email" defaultValue={userLogged.email} />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            required
            name="password"
            defaultValue={userLogged.password}
          />
          <label htmlFor="confirmPass">Confirm Password:</label>
          <input
            type="password"
            required
            name="confirmPassword"
            defaultValue={userLogged.confirmPassword}
          />
          <label htmlFor="cpf">CPF:</label>
          <input type="text" name="cpf" defaultValue={userLogged.cpf} />
          <SaveButton type="submit" />
          <S.deleteModalext>
          Gostaria de deslogar?{" "}
              <AiOutlineLogout
                size={25}
                color="red"
                cursor="pointer"
                onClick={logout}
              />
              </S.deleteModalext>
        </S.UserModal>
      </Modal>

    </S.ProfileMain>
  )
}

export default Profiles