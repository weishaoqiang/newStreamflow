<template>
  <li class="menu-item">
    <div :class="['item', {'item_active': itemData.id === ontapId}]" @click="clickItem(itemData)" v-if="!itemData.children">
      <p>{{itemData.name}}</p>
    </div>
    <template v-else>
      <div :class="['title', {'title_active': itemData.id === ontapId}]" @click="clickItem(itemData)">
        <div class="left-part">
          <i class="iconfont icon-dropdown"></i>
          <i class="iconfont icon-folder"></i>
          <p class="name">{{itemData.name}}</p>
        </div>
        <div class="right-part delete">
          <i class="iconfont icon-delete"></i>
        </div>
      </div>
      <ul :class="['sub-menu', {'sub-menu_active': itemData.id === ontapId}]">
        <MenuItem v-for="(childItem, childIndex) in itemData.children" :ontapId="ontapId" :key="childIndex" :itemData="childItem" @onTap="clickSubItem"/>
      </ul>
    </template>
  </li>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    itemData: {
      type: Object,
      default: () => {
        return null
      }
    },
    ontapId: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      tapId: ''
    }
  },
  methods: {
    clickItem(item) {
      this.$emit('onTap', item)
    },
    clickSubItem(params) {
      this.$emit('onTap', params)
    }
  }
}
</script>

<style lang="scss" scoped>
  .menu-item {
    width: 100%;
    height: auto;
    box-sizing: border-box;
    .item {
      width: 100%;
      height: 32px;
      line-height: 32px;
      &_active {
        color: $assistColorBlue;
      }
    }
    .title {
      width: 100%;
      height: 40px;
      line-height: 40px;
      padding: 0 16px 0 6px;
      display: flex;
      justify-content: space-between;
      &_active {
        color: $assistColorBlue;
        .icon-folder, .icon-delete {
          color: $assistColorBlue;
        }
        .icon-dropdown {
          transform: rotate(180deg);
        }
      }
      .left-part {
        flex: 1;
        max-width: 182px;
        display: flex;
        justify-content: flex-start;
        .iconfont {
          margin-right: 6px;
          width: 16px;
        }
        .icon-dropdown {
          font-size: 12px;
          font-weight: 100;
        }
        .icon-folder {
          font-size: 16px;
          font-weight: 600;
        }
        .name {
          flex: 1;
          font-size: 14px;
          font-weight: 600;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
      .right-part {
        width: 24px;
        text-align: center;
        height: 100%;
        .icon-delete {
          font-size: 16px;
        }
      }
    }
    .sub-menu {
      width: 100%;
      padding-left: 20px;
      box-sizing: border-box;
      height: 0;
      overflow: hidden;
      &_active {
        height: auto;
      }
    }
  }
</style>