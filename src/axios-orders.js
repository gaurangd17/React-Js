import axios from 'axios'

const instance  = axios.create({
    baseURL : 'https://react-burger-app-49b14.firebaseio.com/'
});

export default instance;

