<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {}
  },
  mounted() {
    console.log(this.$route)
  }
}
</script>

<style lang="scss">
  @import '@/assets/style/common.scss';

  .container {
    width: 100%;
    height: 100vh;
  }
</style>