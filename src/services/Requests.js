import axios from "axios";

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
};

const serverURL = 'http://127.0.0.1:8000';

const requestsInstance = axios.create({
    baseURL: serverURL,
    headers: headers
});

requestsInstance.interceptors.request.use(
    requestConfig => {
        // Aqui você pode adicionar lógica para manipular o token, se necessário
        return requestConfig;
    },
    error => {
        return Promise.reject(error);
    }
);


export default requestsInstance;
