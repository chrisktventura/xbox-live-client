import {api} from './api'
import swal from 'sweetalert'
import { Game } from '../types/gametypes'
import { Dispatch, SetStateAction } from 'react';

interface GameModalProps {
  handleOpenModal: () => void;
  game?: Game;
  setGame: Dispatch<SetStateAction<Game | undefined>>;
}

interface NewGameData {
  name?: string;
  description?: string;
  imageCoverUrl?: string;
}


export const gameService = {


  allGames: (data: Game) => {
    try {
      const req = api.get('/games')
      return req;
    } catch (error: any) {
      swal({
        title: 'Erro',
        text: `${error.message}`,
        icon: 'error',
        timer: 7000
      })
    }
  },

  gameById: async (id: string) => {
    try {
      const req = await api.get(`/games/${id}`)
      return req;
    } catch (error: any) {
      swal({
        title: 'Erro',
        text: `${error.message}`,
        icon: 'error',
        timer: 7000
      })
    }
  },

  createGame: async (game: Game) => {
    try {
      const req = await api.post('/games', game)
      return req;
    } catch (error: any) {
      swal({
        title: 'Erro',
        text: `${error.message}`,
        icon: 'error',
        timer: 7000
      })
    }
  },

  updateGame: async (id: string) => {
    try {
      const req = await api.patch(`/games/${id}`)
      return req;
    } catch (error: any) {
      swal({
        title: 'Erro',
        text: `${error.message}`,
        icon: 'error',
        timer: 7000
      })
    }
  },

  deleteGame: async (id: string) => {
    try {
      const req = await api.delete(`/games/${id}`)
      return req;
    } catch (error: any) {
      swal({
        title: 'Erro',
        text: `${error.message}`,
        icon: 'error',
        timer: 7000
      })
    }
  },

}
