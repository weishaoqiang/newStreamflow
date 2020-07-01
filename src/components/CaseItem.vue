<template>
  <div class="case-item">
    <div class="legend-list">
      <div class="legend-item"><img src="" alt=""></div>
      <div class="legend-item"><img src="" alt=""></div>
      <div class="legend-item"><img src="" alt=""></div>
    </div>
    <div class="label-list">
      <div class="label-item">
        <span class="label">打印机：</span><span class="value">UltraCraft-A2D</span>
      </div>
      <div class="label-item">
        <span class="label">材料：</span><span class="value">Model2.0 UV Caramel</span>
      </div>
      <div class="label-item">
        <span class="label">应用：</span><span class="value">隐形正畸牙模</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .case-item {
    background-color: #fff;
    width: 264px;
    height: 323px;
    padding: 24px;

    .legend-list {
      width: 100%;
      height: 195px;
      display: flex;

      .legend-item {
        flex: 1;
        position: relative;
        height: 100%;
        > img {
          position: absolute;
          left: 50%;
          bottom: 0;
          transform: translateX(-50%);
        }
      }
    }

    .label-list {
      .label-item {
        min-height: 22px;
        line-height: 22px;
        margin-bottom: 8px;
        color: $assistColorGray;
      }
    }
  }
</style>