import axios from 'axios';

const instance = axios.create({
    baseURL : "https://memeapp-backend.herokuapp.com/",
    
});


export default instance;