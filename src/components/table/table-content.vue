<template>
  <!-- 清单表格 -->
  <div class="content-table">
    <div
      class="table-item"
      v-for="(item, index) in tableItemData"
      :key="item.tableTd"
      @click="actTable(item, index)"
    >
      <div
        class="close-table-box"
        @click="showTableItem"
        v-show="actIndex == index"
      >
        <i class="iconfont icon-close"></i>
      </div>
      <div class="table-item-title">{{ item.name }}</div>
      <div class="table-item-text">
        <table cellspacing="0" cellpadding="0">
          <thead>
            <tr>
              <th v-for="item in 6" :key="item"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="sub in 10" :key="sub">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["tableItemData"],
  data() {
    return {
      actIndex: -1,
    };
  },
  methods: {
    showTableItem() {
      this.tableItemData.splice(this.actIndex, 1);
    },
    actTable(item, index) {
      this.actIndex = index;
    },
  },
};
</script>
<style lang="">
</style>