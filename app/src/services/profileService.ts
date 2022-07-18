import api from './Api';

const profileServices ={
    allProfile: () =>
    api.get('/profiles')
    .then((response: any)=>{
        return response;
    })
    .catch((error:any)=> console.log(error))
}

export 