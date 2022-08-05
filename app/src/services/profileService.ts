import api from './Api';
import { Profile, ProfileEdit } from '../types/profiletypes';
import swal from 'sweetalert'

export const profileServices ={
    allProfiles: async (Profiles: Profile) => {
        try {
            const req = await api.get("/profile");
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
    findProfileById: async (id: string) => {
        try {
            const req = await api.get(`/profile/${id}`);
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
    createProfile: async (values: ProfileEdit) => {
		try{ 
            const req = await api.post("/profile", values);
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

