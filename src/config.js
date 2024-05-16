
const defaultHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
};

const apiServer ={
    address: 'http://api.pathsdk.com.br',
    baseUrl:'',
    authToken:'/auth/token',
    authRegister:'/auth/register',
}

const AppSettings = {
    headers:defaultHeaders,
    server:apiServer,
}

export default AppSettings