import axios from "axios";

export const urlBaseApi = process.env.REACT_APP_API_BASE_URL;
console.log({urlBaseApi})
export const urlBase = process.env.REACT_APP_BASE_URL;
console.log({urlBase})
export const api = axios.create({
    // ONLINE
    // baseURL: "http://159.203.69.144:38000/api/v1/",
    baseURL: process.env.REACT_APP_API_BASE_URL,
});