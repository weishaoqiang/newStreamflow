<template>
  <ul class="menu-tree">
    <MemuItem v-for="(item, index) in treeData" :itemData="item" :ontapId="ontapId" :key="index" @onTap="ontapItem"/>
  </ul>
</template>

<script>
import MemuItem from './MenuItem.vue'

export default {
  name: 'MenuTree',
  props: {
    treeData: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      ontapId: ''
    }
  },
  components: {
    MemuItem
  },
  methods: {
    ontapItem(item) {
      this.ontapId = item.id
    }
  }
}
</script>

<style lang="scss" scoped>
  .menu-tree {
    width: 240px;
    height: auto;
    background-color: #fff;
  }
</style>