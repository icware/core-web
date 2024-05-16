<template>
    <div>
        <div>
            <h1>Cadastre-se</h1>
            <form @submit.prevent="submitForm">
                <div>
                    <label for="">Nome:</label>
                    <input v-model="data.first_name" type="text">
                </div>
                <div>
                    <label for="">Sobrenome:</label>
                    <input v-model="data.last_name" type="text">
                </div>
                <div>
                    <label for="">E-mail:</label>
                    <input ref="emailInput" v-model="data.email" type="email" name="email" id="email"
                        @input="ClearEmailInput" />
                    <div v-if="emailError" style="color: red;">
                        {{ emailError }}
                    </div>
                </div>
                <div>
                    <label for="">Senha:</label>
                    <input ref="passInput" v-model="data.password" type="password" name="password" id="password"
                        @input="ClearPassInput" />
                    <div v-if="passError" style="color: red;">
                        {{ passError }}
                    </div>
                </div>
                <div>
                    <label for="">Confirmar Senha:</label>
                    <input ref="passInput" v-model="passConfirm" type="password" name="passConfirm" id="passConfirm"
                        @input="ClearPassConfirmInput" />
                    <div v-if="passConfirmError" style="color: red;">
                        {{ passConfirmError }}
                    </div>
                </div>
                <div>
                    <label for="">Telefone:</label>
                    <input v-model="data.phone" type="text">
                </div>
                <div>
                    <button type="submit">Cadastrar</button>
                    <button>Cancelar</button>
                </div>
                <div v-if="MessageError" role="alert">
                    {{ MessageError }}
                </div>
            </form>

        </div>
    </div>
</template>

<script setup>
import { AuthRegister } from '@/controllers/AuthController';
import { reactive, ref } from 'vue';
import { useRoute } from 'vue-router';
// import { RegisterValidEmail, RegisterValidPassword, RegisterPassConfirm } from "@/packages/Auth/functions/RegisterValidate.js";

//uses
const router = useRoute();

//erros
const MessageError = ref('');
const emailError = ref('');
const passError = ref('');
const passConfirmError = ref('');

//inputs
const emailInput = ref(null);
const passInput = ref(null);
const passConfirmInput = ref(null);



//Datas
const passConfirm = ref('');
const data = reactive({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    phone: ''
});

function ClearEmailInput() {
    emailError.value = '';
    MessageError.value = '';
}

function ClearPassInput() {
    passError.value = '';
    MessageError.value = '';
}

function ClearPassConfirmInput() {
    passConfirmError.value = '';
    MessageError.value = '';
}

function dataValidate(data) {
    if (!data.email) {
        emailError.value = 'Campo obrigatório!.';
        emailInput.value.focus();
        return false
    }
    if (!data.password) {
        passError.value = 'Campo obrigatório!.';
        passInput.value.focus();
        return false
    }
    if (!passConfirm.value) {
        passConfirmError.value = 'Confirme a senha.';
        passConfirmInput.value.focus();
        return false
    }
    if (passConfirm.value != data.password) {
        passConfirmError.value = 'As senhas não são iguais.';
        passConfirmInput.value.focus();
        return false
    }
    console.log(passConfirm.value, data.password);
    return true
}

async function submitForm() {
    try {

        if (dataValidate(data)) {
            const response = await AuthRegister(data);

            if (response.status === 201) {
                MessageError.value = response.data.sucess;
                router.push('/dashboard');
            } else {
                if (response.data) {
                    MessageError.value = response.data.error;
                } else {
                    MessageError.value = 'Falha ao se cadastrar!';
                }
            }
        }

    } catch (error) {
        MessageError.value = 'Falha ao se cadastrar!';
    }
}


</script>

<style lang="scss" scoped></style>