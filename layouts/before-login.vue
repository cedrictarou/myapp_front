<template>
  <v-app>
    <before-login-app-bar />
    <v-main>
      <nuxt />
    </v-main>
    <app-footer />
  </v-app>
</template>

<script>
import BeforeLoginAppBar from '../components/BeforeLogin/BeforeLoginAppBar.vue'
export default { components: { BeforeLoginAppBar } }
</script>

<style></style>
