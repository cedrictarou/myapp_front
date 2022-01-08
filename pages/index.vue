<template>
  <v-container fluid>
    <v-card flat tile color="transparent">
      <v-card-title> nuxt-i18nの検証 </v-card-title>
      <v-card-text>
        <v-simple-table dense>
          <template #default>
            <thead>
              <tr>
                <th>en</th>
                <th>ja</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(path, i) in ['signup', 'login']" :key="`path-${i}`">
                <td>{{ path }}</td>
                <td>{{ $t(`title.${path}`) }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    let users = []
    await $axios.$get('/api/v1/users').then((res) => (users = res))
    const userKeys = Object.keys(users[0] || {}) // 追加
    return { users, userKeys }
  },
  // data () 追加
  data() {
    return {
      colors: ['primary', 'info', 'success', 'warning', 'error', 'background'],
      customClass: [
        { name: 'hidden-ipad-and-down', color: 'error', des: 'ipad未満で隠す' },
        { name: 'hidden-ipad-and-up', color: 'info', des: 'ipad以上で隠す' },
        {
          name: 'hidden-mobile-and-down',
          color: 'success',
          des: 'mobile未満で隠す',
        },
        {
          name: 'hidden-mobile-and-up',
          color: 'warning',
          des: 'mobile以上で隠す',
        },
      ],
    }
  },
  computed: {
    dateFormat() {
      return (date) => {
        const dateTimeFormat = new Intl.DateTimeFormat('ja', {
          dateStyle: 'medium',
          timeStyle: 'short',
        })
        return dateTimeFormat.format(new Date(date))
      }
    },
  },
}
</script>
