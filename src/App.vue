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
  }
}
</script>

<style lang="scss">
  @import '@/assets/style/init.scss';

  .container {
    width: 100%;
    height: 100vh;
  }
</style>