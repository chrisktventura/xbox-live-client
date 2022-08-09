import api from './Api';
import { Profile, ProfileEdit } from '../types/profiletypes';
import swal from 'sweetalert'

export const profileServices ={
    allProfiles: () => {
        api.get('/profiles')
        .then((response: any) => {
            return response;
        })
        .catch((error:any) => { swal({  
            title: 'Erro',
            text: `${error.message}`,
            icon: 'error',
            timer: 7000
        })
        })
    }      

    ,
    findProfileById: (profileId: string) => {
       api.get(`/profiles/${profileId}`)
        .then((response:any) => {
            return response;
        })
        .catch((error: any) => {
            swal({  
                title: 'Erro',
                text: `${error.message}`,
                icon: 'error',
                timer: 7000
              })
        })
    },
    createProfile: (values: Profile) => {
		api.post("/profile", values)
        .then((response:any) =>{
            return response;
        })
        .catch((error: any) => {
            swal({  
                title: 'Erro',
                text: `${error.message}`,
                icon: 'error',
                timer: 7000
              })
        })
    },
    updateProfile: (id: string, profile: ProfileEdit) => {
        api.patch(`/profile/${id}`, {
            name: profile.name,
            imageURL: profile.imageURL,
        })
        .then((response:any) => {
            return response;
        })
        .catch ((error: any) => {
            swal({  
                title: 'Erro',
                text: `${error.message}`,
                icon: 'error',
                timer: 7000
              })
        })
    },
    deleteProfile: async (id: string) => {
        api.delete(`/profile/${id}`)
        .then((response: any) => {
            return response;
        })
        .catch((error: any) => {
            swal({  
                title: 'Erro',
                text: `${error.message}`,
                icon: 'error',
                timer: 7000
              })
        })
    }
}

