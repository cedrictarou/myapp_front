<template>
  <v-breadcrumbs :items="items" class="d-block text-truncate">
    <template #item="{ item }">
      <v-breadcrumbs-item>
        <div class="text-truncate" :style="{ maxWidth: '120px' }">
          {{ item.text }}
        </div>
      </v-breadcrumbs-item>
    </template>
    <template #divider>
      <v-icon> mdi-chevron-right </v-icon>
    </template>
  </v-breadcrumbs>
</template>

<script>
export default {
  computed: {
    items() {
      const currentRouteName = this.$route.name
      const items = [{ text: this.$my.pageTitle(currentRouteName) }]
      if (currentRouteName.match(/project/) && !this.$vuetify.breakpoint.xs) {
        const currentProject = this.$store.state.projects.current
        items.unshift({ text: currentProject.name })
      }
      return items
    },
  },
}
</script>
