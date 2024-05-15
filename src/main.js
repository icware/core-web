import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/main.css'
import { createPinia } from 'pinia'
import  useModelAuth  from '@/models/Auth';

const app = createApp(App);

app.use(createPinia())
app.use(router)

if (localStorage.getItem('access_token')) {
    (async () => {
        const auth = useModelAuth();

        try {
            auth.setIsAuth(true);

           await auth.checkToken();

        } catch (error) {
            auth.setIsAuth(false);
        }

    } ) ()
}

app.mount('#app');
