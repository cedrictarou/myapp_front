<template>
  <v-text-field
    v-model="setEmail"
    :rules="rules"
    label="メールアドレスを入力"
    :placeholder="form.placeholder"
    outlined
  />
</template>

<script>
export default {
  prpos: {
    email: {
      type: String,
      default: '',
    },
    placeholder: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      rules: [(v) => !!v || '', (v) => /.+@.+\..+/.test(v) || ''],
    }
  },
  computed: {
    setEmail: {
      get() {
        return this.email
      },
      set(newValue) {
        return this.$emit('update:email', newValue)
      },
    },
    form() {
      const placeholder = this.placeholder ? undefined : 'your@email.com'
      return { placeholder }
    },
  },
}
</script>
