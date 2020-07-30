<template>
  <div class="content">
    <MenuTree :treeData="treeData"/>
  </div>
</template>

<script>
import MenuTree from 'components/Menu/MenuTree.vue'

export default {
  name: 'Process',
  data() {
    return {
       treeData: [{
        name: '菜单1scnkcsnkcndkscnkdscnksdncksd',
        id: '1',
        children: [{
            name: '子菜单1-1',
            id: '1-1'
          }, {
            name: '子菜单1-2',
            id: '1-2'
          }, {
            name: '子菜单1-3',
            id: '1-3'
          }]
        }, {
          name: '菜单2',
          id: '2',
          children: [{
              name: '子菜单2-1',
              id: '2-1'
            }, {
              name: '子菜单2-2',
              id: '2-2',
              children: [{
                  name: '子菜单2-2-1',
                  id: '2-2-1'
                }, {
                  name: '子菜单2-2-2',
                  id: '2-2-2'
                }, {
                  name: '子菜单2-2-3',
                  id: '2-2-3'
                }]
            }, {
              name: '子菜单2-3',
              id: '2-3'
            }]
        }, {
          name: '菜单3',
          id: '3',
          children: [{
              name: '子菜单3-1',
              id: '3-1'
            }, {
              name: '子菜单3-2',
              id: '3-2'
            }, {
              name: '子菜单3-3',
              id: '3-3'
            }]
        }]
    }
  },
  components: {
    MenuTree
  }
}
</script>

<style lang="scss" scoped>
  
</style>