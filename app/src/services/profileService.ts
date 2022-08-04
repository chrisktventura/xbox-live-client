import api from './Api';
import { Profile } from '../types/profiletypes';

export const profileServices ={
    allProfiles: async (newProfile: Profile) => {
        try {
            const req = await api.get("/profile");
            return req;
        } catch (err) {
            alert(err);
        }
    },
    createProfile: (values: Profile) =>
		api
			.post('/profile', values)
			.then((response: any) => response)
			.catch((error: any) => error.response),
}

