import api from './Api'
import swal from 'sweetalert'
import { Game } from '../types/gametypes'

export const GameService = {
    allGames: async (game: Game) => {
        try {
            const req = await api.get('/games')
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
    
    gameById: async (id: string) =>{
        try{
            const req = await api.get('/games/' + id)
            return req;
        }  catch (error: any) {
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

    updateGame: async (game: any) => {
        try {
            const req = await api.patch('/games', game)
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
