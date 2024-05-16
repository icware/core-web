<template>
    <div>
        <form @submit.prevent="submitForm">

            <div>


                <div>
                    <label for=email>Email</label>
                    <input type="email" v-model="data.email" name="email" id="email" autocomplete="email" />
                </div>

                <div>
                    <label for=password>Senha</label>
                    <input type="password" v-model="data.password" name="password" id="password"
                        autocomplete="password" />
                </div>

                <div>
                    <button type="submit">
                        Entrar
                    </button>
                </div>

                <div v-if="MessageError" role="alert">
                    {{ MessageError }}
                </div>



            </div>

        </form>
    </div>
</template>


<style lang="">

</style>

<script setup>
import useAuthModel from '@/models/Auth';
import { onMounted, reactive, ref } from 'vue';
import { useRoute } from 'vue-router';
import { AuthLogin } from '@/controllers/AuthController';

const router = useRoute();
const auth = useAuthModel();
const MessageError = ref('');


const data = reactive({
    email: '',
    password: ''
});

async function submitForm() {
    try {
        const response = await AuthLogin(data.email, data.password);

        if (response.status === 200) {
            auth.setData(response.data);
            router.push('/dashboard');
        } else {
            if (response.data) {
                MessageError.value = response.data.error;
            } else {
                MessageError.value = 'Falha ao tentar fazer login';
            }
        }

    } catch (error) {
        MessageError.value = 'Falha ao tentar fazer login';
    }
}

onMounted(() => {
    if (auth.getIsAuth) {
        router.push('/dashboard');
    }
})


</script>
