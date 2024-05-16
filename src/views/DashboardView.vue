<template>
    <div>
        <h1>Dashboard</h1>
        <h4>{{ user.name }}</h4>
    </div>
</template>

<script setup>
// import { useRouter } from 'vue-router';
import useAuthModel from '@/models/Auth';
const auth = useAuthModel();

const user = auth.getUser;

// const router = useRouter();



</script>

<style lang="scss" scoped></style>