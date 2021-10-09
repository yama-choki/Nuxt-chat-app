<template>
  <div>
    <a class="btn btn-light" @click="login">
      ログイン
    </a>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    // eslint-disable-next-line require-await
    async login () {
      this.$router.push('/')
    }
  }
}
</script>

<style>
</style>
