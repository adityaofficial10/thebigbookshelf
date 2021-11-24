import axios from 'axios'


const instance = axios.create({
    baseURL:'http://localhost:4000',
    port: 4000,
    headers:{
        "Content-Type" : 'application/x-www-form-urlencoded'
    }
});


axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.crossDomain = true;

export const login = (body) => instance.post('/auth/login', body, {withCredentials: true});
export const signup = (body) => instance.post('/auth/register', body, {withCredentials: true});

export default instance;