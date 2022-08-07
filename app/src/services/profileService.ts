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
    createProfile: async (values: Profile) => {
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
    updateProfile: async (id: string, profile: ProfileEdit) => {
        try {
        const req = await api.patch(`/profile/${id}`, {
            name: profile.name,
            imageURL: profile.imageURL,
        });
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
    deleteProfile: async (id: string) => {
        try {
            const req = await api.delete(`/profile/${id}`);
            return req;
        } catch (error: any) {
            swal({  
                title: 'Erro',
                text: `${error.message}`,
                icon: 'error',
                timer: 7000
              })
        }
    }
}

