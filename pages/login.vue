<template>
  <user-form-card>
    <template #form-card-content>
      <v-form ref="form" v-model="isValid" @submit.prevent="login">
        <user-form-email :email.sync="params.auth.email" />
        <user-form-password :password.sync="params.auth.password" />
        <v-card-actions>
          <nuxt-link to="#" class="body-2 text-decoration-none"
            >パスワードを忘れた？
          </nuxt-link>
        </v-card-actions>
        <v-card-text class="px-0">
          <v-btn
            type="submit"
            :disabled="!isValid || loading"
            :loading="loading"
            block
            class="white--text"
            color="appblue"
          >
            ログインする
          </v-btn>
        </v-card-text>
      </v-form>
    </template>
  </user-form-card>
</template>

<script>
export default {
  layout: 'before-login',
  data({ $store }) {
    return {
      isValid: false,
      loading: false,
      params: {
        auth: {
          // Todo 削除する
          email: 'user0@example.com',
          password: 'password',
        },
      },
      redirectPath: $store.state.loggedIn.homePath,
    }
  },

  methods: {
    async login() {
      this.loading = true
      if (this.isValid) {
        await this.$axios
          .$post('/api/v1/auth_token', this.params)
          .then((response) => this.authSuccessful(response))
          .catch((error) => this.authFailure(error))
      }
      this.loading = false
    },
    authSuccessful(response) {
      this.$auth.login(response)
      // console.log('token', this.$auth.token)
      // console.log('expires', this.$auth.expires)
      // console.log('payload', this.$auth.payload)
      // console.log('user', this.$auth.user)
      // Todo 記録ルートリダイレクト
      this.$router.push(this.redirectPath)
    },
    authFailure({ response }) {
      if (response && response.status === 404) {
        // Todoトースターを出力
        const msg = 'ユーザーが見つかりません😢'
        return this.$store.dispatch('getToast', { msg })
      }
      // Todo エラー処理
    },
  },
}
</script>

<style></style>
