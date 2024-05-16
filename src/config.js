
const defaultHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
};

const apiServer ={
    address: 'https://api.pathsdk.com.br',
    baseUrl:'',
    authToken:'/auth/token',
    authRegister:'/auth',
}

const AppSettings = {
    headers:defaultHeaders,
    server:apiServer,
}

export default AppSettings