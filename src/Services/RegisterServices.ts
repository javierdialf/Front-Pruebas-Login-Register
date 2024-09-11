import axios from 'axios';
import {Usuario} from '../Models/ModelsRegister';

const API_URL = 'http://localhost:5000/user_register';

export const PostNuevoUsuario = async (nuevoUsuario: Usuario) => {
     return await axios.post(API_URL, JSON.stringify(nuevoUsuario), {headers: {
        'Content-Type': 'application/json'
    }});
}



