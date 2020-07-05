<template>
  <div class="btn-group">
    <div class="btn-list">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BtnGroup',
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  .btn-group {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-around;
  }
</style>