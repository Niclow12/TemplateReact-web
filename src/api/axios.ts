import axios from "axios";

export const BASE_URL = import.meta.env.VITE_BASE_URL;


export const api = axios.create({
    baseURL: BASE_URL + "/api",
    // Se usa cuando queres enviar cookies seguras en la peticion, muchos tenian problemas de CORS asi que lodeshabilite
    // withCredentials: true, 
  });