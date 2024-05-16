import {ServerRequest} from "@/services/Requests";
import AppSettings from "@/config";

export async function AuthLogin(email, password) {
    try {
        if (!email || !password) {
            throw new Error('Email e senha são obrigatórios.');
        }

        const dataRequest = {
            email: btoa(email),
            password: btoa(password)
        };

        const response = await ServerRequest('post', AppSettings.server.authToken, dataRequest);
        return response.data;
    } catch (error) {
        if (error.response) {
            throw new Error(error.response.data.error);
        } else if (error.request) {  
            throw new Error('Não foi possível obter resposta do servidor.');
        } else {
            throw new Error(error.message);
        }
    }
}

export async function AuthRegister ( dataRequest ) {
    if (!dataRequest) {
        return null;
    }
    try {
        const response = await ServerRequest('post', AppSettings.server.authRegister, dataRequest);

        if (response) {
            return response
        }

    } catch (error) {
        return null;
    }

}

export async function AuthCheck () {

    try {
       await ServerRequest('get', AppSettings.server.authToken);
       return true;
    } catch (error) {        
        return false;
    }

}