<template>
  <v-container>
    {{ $store.state.projects.current }}
    <nuxt-child />
  </v-container>
</template>

<script>
export default {
  layout: 'project',
  validate({ store, route }) {
    return !!store.state.projects.current && route.name !== 'project'
  },
}
</script>

<style></style>
