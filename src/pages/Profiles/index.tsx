import React, { useEffect, useState } from 'react'
import BgDefault from 'components/BgDefault'
import * as S from './style'
import { BiEdit } from 'react-icons/bi'

import { useNavigate } from 'react-router-dom'
import swall from 'sweetalert'
import { Modal } from 'react-bootstrap'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from "yup";
import { useProfile } from 'context/profiles'
import ProfileCard from 'components/ProfileCard'


const Profiles = () => {  
  const { profiles } = useProfile();

  const back = require("assets/icons/back.svg")  
  const navigate = useNavigate();
  function goToStart() {
    navigate("/")
  }

  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal () {
    setModalIsOpen(true);
  }
  function closeModal (){
    setModalIsOpen(false);
  }

    const custonStyle = {
    width: "100%",
    height: "100%",

  };

  useEffect(() =>{
    setModalIsOpen(true || false);
  }, [])


const editIcon = <BiEdit size={20} />

return (
  <S.ProfileMain>
    <BgDefault />
    <S.ProfileSection>
   
    <S.ProfileCard>
       <ProfileCard profile={[]}/>
    </S.ProfileCard>

        
    <Modal
      isOpen={openModal}
      onRequestClose={closeModal}
      style={custonStyle}
      key='index'>
      <S.ModalContent>

        <Modal.Title>{!profiles ? "Criar Perfil" : "Editar Perfil"}</Modal.Title>

        <S.ModalForm >

          
          <input type="text" name="name" placeholder="Nome" />
          <input type='url' name='imageURL' placeholder="Imagem de perfil"/>

          <S.ModalBtn type="submit" value="Salvar" />
        </S.ModalForm>

        <S.ModalBtn onClick={closeModal} value="Cancelar" />


      </S.ModalContent>



    </Modal>

  </S.ProfileSection>
  </S.ProfileMain>

)
}


export default Profiles