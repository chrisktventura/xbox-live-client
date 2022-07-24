import React from 'react'
import BgDefault from 'components/BgDefault'
import * as S from './style'
import { BiEdit } from 'react-icons/bi'


const Profiles = () => {
  const editIcon = <BiEdit size={20} />
  return (
    <S.ProfileMain>
      <BgDefault />

      <S.ProfileSection>
        <div>
          <img src="https://avatars.githubusercontent.com/u/96752298?v=4" alt="" />
          <p>Chris</p>
          <button>{editIcon}</button>
        </div>
        <div>
          <img src="https://avatars.githubusercontent.com/u/83729692?v=4" alt="" />
          <p>Ale Vadio</p>
          <button>{editIcon}</button>
        </div>
        <div>
          <img src="https://avatars.githubusercontent.com/u/97460632?v=4" alt="" />
          <p>Thiagão DMC</p>
          <button>{editIcon}</button>
        </div>
        <div>
          <img src="https://avatars.githubusercontent.com/u/79556805?v=4" alt="" />
          <p>Dom Peladon</p>
          <button>{editIcon}</button>
        </div>
      </S.ProfileSection>

    </S.ProfileMain>
  )
}

export default Profiles