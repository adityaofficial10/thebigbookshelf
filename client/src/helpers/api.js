import axios from 'axios'

const instance = axios.create({
    baseURL:'https://67g46ob2ed.execute-api.us-west-2.amazonaws.com/dev',
    headers:{
        "Content-Type" : 'application/json'
    }
});


axios.defaults.crossDomain = true;

export const login = (body) => instance.post('/auth/login', body);
export const signup = (body) => instance.post('/auth/register', body);

export const allItems = () => instance.get('/search/getAll');
export const purchase = (body) => instance.post('/buyers/purchase', body);
export const feedback = (body) => instance.post('/buyers/feedback', body);

export const addBook = (body) => instance.post('/sellers/add', body);

export default instance;