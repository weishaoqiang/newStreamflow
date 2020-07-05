<template>
  <div class="content">
    <Header />
    <div class="case-box">
      <div class="case-content">
        <div class="title">请选择项目使用的打印机、应用和材料</div>
        <div class="case-list-outer">
          <div class="case-list">
            <case-item class="case-item" v-for="i in 3" :key="i"></case-item>
          </div>
        </div>
      </div>
    </div>
    <btn-group>
      <!-- <el-button>默认按钮</el-button> -->
      <el-button type="primary">{{ $t("index.next") }}</el-button>
    </btn-group>
  </div>
</template>

<script>
import Header from "components/Header.vue"
import CaseItem from "components/CaseItem.vue"
import BtnGroup from "components/BtnGroup.vue"

export default {
  name: 'Index',
  components: {
    Header,
    CaseItem,
    BtnGroup
  },
  data() {
    return {}
  },
  mounted() {
    this.$nextTick(() => {
      console.log(this.$i18n)
    })
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.case-box {
  height: calc(100vh - 170px);
  position: relative;
}
.case-content {
  // min-height: 400px;
  overflow: hidden;
  width: 100%;
  padding: 0 120px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .title {
    width: 100%;
    text-align: center;
    font-size: 22px;
    height: 24px;
    line-height: 24px;
    margin-bottom: 48px;
  }

  .case-list-outer {
    display: flex;
    justify-content: space-around;
  }

  .case-list {
    overflow-y: auto;
    height: auto;
    // width: auto;
    max-height: 463px;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;

    .case-item {
      margin: 0 16px 16px;
    }
  }
}
</style>