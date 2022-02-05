export default ({ $axios, $auth, isDev }) => {
  // リクエストログ
  $axios.onRequest((config) => {
    config.headers.common['X-Requested-With'] = 'XMLHttpRequest'
    if ($auth.token) {
      config.headers.Authorization = `Bearer ${$auth.token}`
    }
    if (isDev) {
      console.log(config)
    }
  })
  // レスポンスログ
  $axios.onResponse((config) => {
    if (isDev) {
      console.log(config)
    }
  })
  // エラーログ
  $axios.onError((e) => {
    // console.log(e.response)
  })
}
