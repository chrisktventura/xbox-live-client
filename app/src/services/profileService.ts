import api from './Api';
import { Profile } from '../types/profiletypes';

export const profileServices ={
    allProfile: async (newProfile: Profile) => {
        try {
            const req = await api.get("/profile");
            return req;
        } catch (err) {
            alert(err);
        }
    }
}

