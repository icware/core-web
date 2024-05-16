<template>
    <div>
        <form @submit.prevent="submitForm">

            <div>


                <div>
                    <label for=email>Email</label>
                    <input type="email" v-model="data.email" name="email" id="email" ref="emailInput"
                        @input="clearEmailError" />
                    <div v-if="emailError" style="color: red;">
                        {{ emailError }}
                    </div>
                </div>

                <div>
                    <label for=password>Senha</label>
                    <input type="password" v-model="data.password" name="password" id="password" ref="passwordInput"
                        @input="clearPasswordError" />
                    <div v-if="passwordError" style="color: red;">
                        {{ passwordError }}
                    </div>
                </div>

                <div v-if="MessageError" role="alert" style="color: red;">
                    {{ MessageError }}
                </div>

                <div>
                    <button type="submit">
                        Entrar
                    </button>
                </div>



            </div>

        </form>
    </div>
</template>


<script setup>
import useAuthModel from '@/models/Auth';
import { onMounted, reactive, ref } from 'vue';
import { useRoute } from 'vue-router';
import { AuthLogin } from '@/controllers/AuthController';

// Ueses
const router = useRoute();
const auth = useAuthModel();

// Inputs
const emailInput = ref(null);
const passwordInput = ref(null);

// Erros
const emailError = ref('');
const passwordError = ref('');
const MessageError = ref('');

// Datas
const data = reactive({
    email: ref(''),
    password: ref(''),
});


function clearEmailError() {
    MessageError.value = '';
    emailError.value = '';
}

function clearPasswordError() {
    MessageError.value = '';
    passwordError.value = '';
}


function dataValidate(data) {

    if (!data.email) {
        emailError.value = 'Email é obrigatorio';
        emailInput.value.focus();
        return false;
    } else {
        emailError.value = '';
    }
    if (!data.password) {
        passwordError.value = 'Senha não informada'
        passwordInput.value.focus();
        return false;
    } else {
        passwordError.value = '';
    }

    return true;
}

async function submitForm() {
    try {

        if (dataValidate(data)) {

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


<style lang="">

</style>
