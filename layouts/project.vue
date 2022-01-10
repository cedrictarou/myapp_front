<template>
  <v-app>
    <!-- toolbar -->
    <logged-in-app-bar clipped-left>
      <template #navigation-toggle-button>
        <v-app-bar-nav-icon @click="drawer = !drawer" />
      </template>
    </logged-in-app-bar>

    <!-- navigation drawer -->
    <project-navigation-drawer :drawer.sync="drawer" />

    <!-- main content -->
    <v-main>
      project.vue
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
    }
  },
}
</script>

<style></style>
