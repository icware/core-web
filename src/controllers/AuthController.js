import requestsInstance from "@/services/Requests";

export async function AuthLogin ( email, password ) {
    if (!email || !password) {
        return null
    }

    const dataRequest = {
        email:email,
        password:password
    }

    try {
        const response = await requestsInstance.post(
            'auth/token',
            dataRequest
        );

        if (response) {
            return response
        }

    } catch (error) {
        return null;
    }

}

export async function AuthRegister ( dataRequest ) {
    if (!dataRequest) {
        console.log('Esta faltando os dados');
        return null;
    }

    try {
        const response = await requestsInstance.post(
            'auth',
            dataRequest
        );

        if (response) {
            return response
        }

    } catch (error) {
        return null;
    }

}

export async function AuthCheck () {

    try {
        const response = await requestsInstance.get('auth/token',);

        if (response) {
            return response
        }

    } catch (error) {
        return null;
    }

}