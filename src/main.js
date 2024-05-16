import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import App from './App.vue'
import router from './router'
 
// import '@/assets/css/main.css'

import 'primevue/resources/themes/lara-dark-blue/theme.css';

import 'primeicons/primeicons.css'


import CFloatLabel from 'primevue/floatlabel';
import CInputText from 'primevue/inputtext';
import CPassword from 'primevue/password';
import CDivider from 'primevue/divider';
import CPanel from 'primevue/panel';
import CDialog from 'primevue/dialog';
import CButton from 'primevue/button';

import { createPinia } from 'pinia'
import  useModelAuth  from '@/models/Auth';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue, {
    unstyled: true,

} );

app.component('CInputText',CInputText);
app.component('CFloatLabel',CFloatLabel);
app.component('CPassword',CPassword);
app.component('CDivider',CDivider);
app.component('CPanel',CPanel);
app.component('CDialog',CDialog);
app.component('CButton',CButton);



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
