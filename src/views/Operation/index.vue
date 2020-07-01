<template>
  <div class="content">
    <Header />
    <div class="title">请选择项目使用的打印机、应用和材料</div>
    <div class="case-list">
      <case-item></case-item>
    </div>
  </div>
</template>

<script>
import Header from "components/Header.vue"
import CaseItem from "components/CaseItem.vue"

export default {
  name: 'Index',
  components: {
    Header,
    CaseItem
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>