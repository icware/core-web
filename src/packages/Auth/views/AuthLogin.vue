<script setup>
import useAuthModel from '@/models/Auth';
import { reactive } from 'vue';
import { useRoute } from 'vue-router';
import { AuthLogin } from '@/controllers/AuthController';

const router = useRoute();
const auth = useAuthModel();

const requestData = reactive({
    email: '',
    password: ''
});

async function submit() {
    try {
        const response = await AuthLogin()
    } catch (error) {

    }
}


</script>


<template lang="pt-br">
    <div>
       
    </div>
</template>


<style lang="">

</style>