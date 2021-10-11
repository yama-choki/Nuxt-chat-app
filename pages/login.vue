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
      const provider = new this.$fb.auth.GoogleAuthProvider()
      await this.$fb.auth().signInWithPopup(provider)
    }
  }
}
</script>

<style>
</style>
