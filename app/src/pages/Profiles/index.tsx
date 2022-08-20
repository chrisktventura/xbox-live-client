import React, { useState, useEffect } from 'react'
import BgDefault from 'components/BgDefault'
import * as S from './style'
import { BiEdit } from 'react-icons/bi'
import { Profile, ProfileEdit } from 'types/profiletypes'
import { profileServices } from 'services/profileService'
import { User, UserEdit } from 'types/usertypes'
import { useNavigate } from 'react-router-dom'
import swall from 'sweetalert'
import { Modal } from 'react-bootstrap'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from "yup";




const Profiles = () => {

  
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal () {
    setModalIsOpen(true);
  }

  function closeModal (){
    setModalIsOpen(false);
  }

  const [profile, setProfile] = useState<Profile>();


  const custonStyle = {
    width: "100%",
    height: "100%",

  };

const editIcon = <BiEdit size={20} />

return (

  <S.ProfileMain>
    <BgDefault />

    <S.ProfileSection>

      <S.ProfileCard>
        <S.ProfileAvatar src={profile?.imageURL} />
        <S.ProfileName>{profile?.name}</S.ProfileName>
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

        <S.ModalForm >
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