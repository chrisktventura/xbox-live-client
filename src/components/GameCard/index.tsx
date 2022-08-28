import * as S from './style'
import React from 'react' 
// { useState, 
//   useEffect } 
import { Game } from 'types/gametypes'
import { Favorite } from 'types/favtypes'
import { api } from '../../services/api'
import toast from 'react-hot-toast'
import { Profile } from 'types/profiletypes'

interface GameCardProps {
  game: Game;
  isFavoritesList: boolean;
  handleGetFavorites: () => void;
}


const GameCard = ({ 
  game,
  isFavoritesList,
  handleGetFavorites,
}: GameCardProps) => {
  const token = localStorage.getItem("token");

  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const profile: Profile = JSON.parse(localStorage.getItem("profile") || "");

  const handleSetFavorite = () => {
    const data = {
      profileId: profile.id,
      gameName: game.title,
    };
  
    api
      .post("/favorites", data, headers)
      .then(() => {
        handleGetFavorites();
        toast.success("Produto favoritado com sucesso!");
      })
      .catch(() => toast.error("Produto já favoritado"));
  };
  
  const handleRemoveFavorite = async () => {
    const res = await api.get<Favorite[]>(
      `/favorites/profile/${profile?.id}`,
      headers
    );
  
    const favoriteId: string | undefined = res.data
      .filter((elem) => elem.gameName === game.title)
      .find((elem) => elem.profileId === profile.id)?.id;
  
    api
      .delete(`/favorites/${favoriteId}`, headers)
      .then(() => {
        handleGetFavorites();
        toast.success("Jogo removido dos Favoritos com sucesso!");
      })
      .catch(() => toast.error("Erro"));
  };
  return (

    <S.GameCardContent>
      <S.GameCardImage
        src={`${game.coverImageUrl}`} />
      <S.GameCardTitle>${game.title}</S.GameCardTitle>
      <S.GameCardYear>${game.year}</S.GameCardYear>
      <S.GameCardImdb>${game.imdbScore}</S.GameCardImdb>
      <button
      onClick={isFavoritesList ? handleRemoveFavorite : handleSetFavorite}></button>
    </S.GameCardContent>
  )
}

export default GameCard;