<template>

    <div class="card">
        <div class="flex flex-column md:flex-row">
            <div class="w-full md:w-5 flex flex-column align-items-center justify-content-center gap-3 py-5">
                <div class="flex flex-wrap justify-content-center align-items-center gap-2">
                    <CFloatLabel>
                        <CInputText id="email" v-model="data.email" class="w-12rem" />
                        <label for="email" class="w-6rem">Username</label>
                    </CFloatLabel>
                </div>
                <div class="flex flex-wrap justify-content-center align-items-center gap-2">
                    <CFloatLabel>
                        <CPassword id="password" v-model="data.password" toggleMask class="w-12rem" />
                        <label for="password" class="w-6rem">Password</label>
                    </CFloatLabel>

                </div>
                <CButton label="Login" icon="pi pi-user" class="w-10rem mx-auto" />
            </div>
            <div class="w-full md:w-2">
                <CDivider layout="vertical" class="hidden md:flex"><b>OR</b></CDivider>
                <CDivider layout="horizontal" class="flex md:hidden" align="center"><b>OR</b></CDivider>
            </div>
            <div class="w-full md:w-5 flex align-items-center justify-content-center py-5">
                <CButton label="Sign Up" icon="pi pi-user-plus" severity="success" class="w-10rem"></CButton>
            </div>
        </div>
    </div>



    <div>
        <h1>Login</h1>
        <form @submit.prevent="submitForm">

            <div>


                <div>




                    <!-- <label for=email>Email</label>
                    <input type="email" v-model="data.email" name="email" id="email" ref="emailInput" /> -->
                    <div v-if="emailError" style="color: red;">
                        {{ emailError }}
                    </div>
                </div>

                <div>
                    <label for=password>Senha</label>
                    <input type="password" v-model="data.password" name="password" id="password" ref="passwordInput" />
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
import { useRouter } from 'vue-router';
import { AuthLogin } from '@/controllers/AuthController';
import { validField, validEmail } from '@/controllers/ValidateController';


// Ueses
const router = useRouter();
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
    email: ref('ideilson.raise@gmail.com'),
    password: ref(''),
});


function dataValidate(data) {
    let isValid = true;

    try {
        isValid = validEmail(data.email);
    } catch (error) {
        emailInput.value.focus();
        emailError.value = error.message;
        isValid = false;
    }

    try {
        isValid = validField(data.password);
    } catch (error) {
        passwordError.value = error.message;
        passwordInput.value.focus();
        isValid = false;
    }

    return isValid;

}

async function submitForm() {
    const isValid = dataValidate(data);

    if (!isValid) {
        return;
    }

    try {
        const response = await AuthLogin(data.email, data.password);
        auth.setData(response);
        router.push("/dashboard");
    } catch (error) {
        MessageError.value = error.message;
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
