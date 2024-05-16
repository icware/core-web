import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/main.css'
import { createPinia } from 'pinia'
import  useModelAuth  from '@/models/Auth';

const app = createApp(App);

app.use(createPinia())
app.use(router)

if (localStorage.getItem('token')) {
    (async () => {
        const auth = useModelAuth();

        try {            
            auth.setIsAuth(true);
            await auth.checkToken();
        } catch (error) {
            auth.setIsAuth(false);
            console.log(error);
            auth.authLogout();
        }

    } ) ()
}

app.mount('#app');
