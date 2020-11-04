<template>
  <div>
    <div class="table-echart">
      <div class="empty-img-box" v-show="chartList.length == 0">
        <i class="empty-img"></i>
        <p>还没有图表，请先添加图表哦～</p>
      </div>
      <el-card
        shadow="hover"
        class="content-echart-box"
        :class="{ 'is-active': index == chartIndex }"
        v-for="(item, index) in chartList"
        :key="index"
        @click.native="handleClick(index)"
      >
        <span class="delete-text" @click="handleDelete(index)">删除</span>
        <bar-content
          :index="index"
          v-if="item.type == 'bar'"
          :data="item"
        ></bar-content>
        <line-content
          :index="index"
          v-if="item.type == 'line'"
          :data="item"
        ></line-content>
      </el-card>
    </div>
  </div>
</template>
<script>
import TableContent from "../table/table-content";
import BarContent from "../bar/bar-content";
import LineContent from "../line/line-content";
export default {
  components: {
    TableContent,
    BarContent,
    LineContent,
  },
  props: {
    sheetData: {},
    chartList: {
      type: Array,
    },
    chartIndex: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      showSide: true,
      barData: [],
    };
  },
  methods: {
    handleClick(index) {
      this.$emit("selectChart", index);
    },
    handleDelete(index) {
      this.chartList.splice(index, 1);
    },
  },
};
</script>
<style lang="">
</style>