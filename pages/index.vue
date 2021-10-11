<template>
  <div>
    <router-link class="btn btn-light" to="/form">
      投稿画面
    </router-link>
    <br><br>
    <ul class="list-group list-group-flush">
      <li v-for="message in messages" :key="message" class="list-group-item">
        <div>
          {{ message.name }}
        </div>
        <div>
          {{ message.message }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {
    messages () {
      return this.$store.state.chat.messages
    }
  },
  async mounted () {
    await this.$store.dispatch('chat/getMessages')
  }
}
</script>

<style>
</style>
