import api from './Api'
import swal from 'sweetalert'
import { Game } from '../types/gametypes'

export const GameService = {
    allGames: async (game: Game) => {
        try {
            const req = await api.get('/games')
            return req;
        } catch (err) {
            alert(err);
        }
    },
    
    gameById: async (id: string) =>{
        try{
            const req = await api.get('/games/' + id)
            return req;
        } catch(err){
            alert(err);
        }
    },
    
    createGame: async (game: Game) => {
    try {
            const req = await api.post('/games', game)
            return req;
        } catch (err) {
            alert(err);
        }
    },

    updateGame: async (game: any) => {
        try {
            const req = await api.patch('/games', game)
            return req;
        } catch (err) {
            alert(err);
        }
    },
   
    deleteGame: async (id: string) => {
        try {
            const req = await api.delete(`/games/${id}`)
            return req;
        } catch (err) {
            alert(err);
        }
    },

}
