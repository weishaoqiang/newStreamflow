<template>
  <div class="content">
    <div class="login-banner"></div>
    <div class="login-box">
      <div class="language">
        <el-dropdown :hide-on-click="true" trigger="click" @command="changelang">
          <span class="el-dropdown-link">
            中文<i class="iconfont icon-vertical-more"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="zh">中文</el-dropdown-item>
            <el-dropdown-item command="en">English</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="login-form">
        <div class="login-logo">
          <img src="@/assets/images/logo.svg" alt="logo">
        </div>
        <el-form :model="params" :rules="rules" ref="ruleForm">
          <el-form-item class="form-field" prop="account">
            <div class="input-box">
              <i class="iconfont icon-account"></i>
              <el-input placeholder="请输入账号" v-model="params.account"/>
            </div>
          </el-form-item>
          <el-form-item class="form-field" prop="password">
            <div class="input-box">
              <i class="iconfont icon-pwd"></i>
              <el-input placeholder="请输入密码" v-model="params.password"/>
            </div>
          </el-form-item>
          <el-form-item class="form-field radio-form">
            <div class="radio-group-item" @click="remember(rememberMe)">
              <span :class="['icon', {'icon__active': rememberMe}]"></span>
              <span class="text">记住我</span>
            </div>
          </el-form-item>
          <el-form-item class="login-button">
            <el-button type="primary" @click="onSubmit('ruleForm')">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      language: 'zh',
      params: {
        account: '',
        password: ''
      },
      rememberMe: true,
      rules: {
        account: [{required: true, message: '请输入账号', trigger: 'blur' }],
        password: [{required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    onSubmit(formName) {
      console.log(formName)
    },
    remember(params) {
      this.rememberMe = !params
    },
    changelang(val) {
      console.log(this)
    }
  }
}
</script>

<style lang="scss" scoped>
  .content {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-between;
  }
  .login-banner {
    flex: 1;
    height: 100vh;
    background-image: url('../../assets/images/login_bg.png');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: auto 100%;
  }
  .login-box {
    width: 550px;
    height: 100vh;
    position: relative;

    .language {
      height: 22px;
      line-height: 22px;
      margin-top: 19px;
      padding: 0 38px;
      display: flex;
      justify-content: flex-end;
      /deep/ .el-dropdown {
        color: $disabledColor;;
      }
    }

    .login-form {
      width: 310px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      .login-logo {
        width: 100%;
        height: 80px;
        margin-bottom: 56px;
        > img {
          display: block;
          margin: auto;
          width: 261px;
          height: 80px;
        }
      }

      // 重置input的样式
      /deep/ .el-input__inner {
        border: 0 none;
        padding: 0;
      }

      .input-box {
        display: flex;
        height: 48px;
        padding: 4px 0 4px 32px;
        border-radius: 4px;
        border: 1px solid $assistColorGray;
        .iconfont {
          margin-right: 24px;
        }
      }

      .radio-form {
        display: flex;
        justify-content: flex-end;
        .radio-group-item {
          cursor: pointer;
          > span {
            display: inline-block;
            height: 21px;
            line-height: 21px;
            vertical-align: middle;
            color: $disabledColor;
            width: auto;
          }
          .icon {
            box-sizing: border-box;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            border: 1px solid $disabledColor;
            position: relative;
            &__active {
              border: 1px solid $assistColorBlue;
              &::before {
                content: "";
                position: absolute;
                width: 6px;
                height: 6px;
                border-radius: 50%;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background-color: $assistColorBlue;
              }
            }
          }
  
        }
      }

      .login-button {
        height: 48px;
        /deep/ .el-form-item__content {
          height: 48px;
          width: 100%;
          button {
            height: 100%;
            width: 100%;
            border-radius: 2px;
          }
        }
      }
    }
  }
</style>