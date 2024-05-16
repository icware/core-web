<template>
  <div>
    <h1>
      Bem vindo a pagina inicial
    </h1>

    <div>
      <router-link to="/login">Fazer login</router-link>
    </div>

    <CPanel header="Header" toggleable>
      <p class="m-0">

      </p>

      <div class="flex flex-column md:flex-row md:justify-content-between row-gap-3">
        <CButton type="button" label="Button 1"></CButton>
        <CButton type="button" label="Button 2" severity="secondary"></CButton>
        <CButton type="button" label="Button 3" severity="help"></CButton>
      </div>


    </CPanel>

    <CButton label="Show" @click="visible = true" />


    <CDialog v-model:visible="visible" modal header="Edit Profile" :style="{ width: '25rem' }">
      <span class="p-text-secondary block mb-5">Update your information.</span>
      <div class="flex align-items-center gap-3 mb-3">
        <label for="username" class="font-semibold w-6rem">Username</label>
        <CInputText id="username" class="flex-auto" autocomplete="off" />
      </div>
      <div class="flex align-items-center gap-3 mb-5">
        <label for="email" class="font-semibold w-6rem">Email</label>
        <CInputText id="email" class="flex-auto" autocomplete="off" />
      </div>
      <div class="flex justify-content-end gap-2">
        <CButton type="button" label="Cancel" severity="secondary" @click="visible = false"></CButton>
        <CButton type="button" label="Save" @click="visible = false"></CButton>
      </div>
    </CDialog>


  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>