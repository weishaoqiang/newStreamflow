<template>
  <div class="header">
    <div class="logo">
      <img src="@/assets/images/logo.svg" alt="logo">
    </div>
    <div class="setting">
      <div class="setting-icon" @click="gotoSetting">
        <i class="iconfont icon-setting"></i>
      </div>
      <div class="user-field">
        <div class="user-img">
          <i class="iconfont icon-default-header"></i>
          <!-- <img src="" alt=""> -->
        </div>
        <div class="name">韦少强</div>
        <div class="dropdown">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              <i class="iconfont icon-dropdown"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>注销账号</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {

    }
  },
  methods: {
    gotoSetting() {
      console.log('去设置')
    }
  }
}
</script>

<style lang="scss" scoped>
  .header {
    width: 100%;
    height: 60px;
    padding: 10px 24px;
    box-shadow: 1px 0 1px 1px #eeeeee, 0 0 1px 1px #eeeeee;
    display: flex;
    justify-content: space-between;
    background-color: $white;

    .setting {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .setting-icon {
        cursor: pointer;
        width: 24px;
        height: 24px;
        text-align: center;
        line-height: 24px;
        margin-right: 16px;

        .iconfont {
          font-size: 22px;
        }

        &:active {
          .iconfont {
            color: $assistColorBlue;
          }
        }
      }

      .user-field {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .user-img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          overflow: hidden;
          
          .iconfont {
            font-size: 32px;
          }
        }

        .name {
          font-size: 14px;
          color: $mainColor;
          padding: 0 12px;
        }

        .dropdown {
          color: #ccc;

          .iconfont {
            font-size: 12px;
          }
        }
      }
    }
  }
</style>