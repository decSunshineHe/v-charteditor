<template>
  <div class="side-right-box">
    <div class="side-header">
      <div
        class="header-item"
        v-for="(item, index) in headerData"
        :key="index"
        :class="{ active: isAct == index }"
        @click="changeTab(index)"
      >
        <i class="iconfont header-svg" :class="item.className"></i>
        <span>{{ item.label }}</span>
      </div>
      <i class="iconfont icon-form-five" @click="backClose"></i>
    </div>
    <div class="setUp-box" v-show="isAct == 0">
      <bar-data
        v-if="type == 'bar'"
        :sheetData="sheetData"
        :chartForm="chartForm"
        @setChartData="setChartData"
      ></bar-data>
      <line-data v-if="type == 'line'"></line-data>
    </div>
    <div class="setUp-box" v-show="isAct == 1">
      <bar-style
        v-if="type == 'bar'"
        :chartData="chartData"
        :chartStyle="chartStyle"
        @setStyle="setStyle"
      ></bar-style>
      <line-style v-if="type == 'line'" @setStyle="setStyle"></line-style>
    </div>
  </div>
</template>

<script>
import LineData from "../line/line-data";
import LineStyle from "../line/line-style";
import BarData from "../bar/bar-data";
import BarStyle from "../bar/bar-style";
import TableData from "../table/table-data";
import TableStyle from "../table/table-data";
export default {
  components: { LineData, LineStyle, BarData, BarStyle, TableData, TableStyle },
  props: {
    chartData: {},
    chartStyle: {},
    chartForm: {},
    type: { type: String },
    sheetData: {},
  },
  data() {
    return {
      isAct: 0,
      headerData: [
        {
          label: "设置数据",
          className: "icon-form-three",
        },
        {
          label: "设置样式",
          className: "icon-form-four",
        },
      ],
    };
  },
  methods: {
    backClose() {
      this.$emit("closeSide", false);
    },
    changeTab(index) {
      this.isAct = index;
    },
    setStyle(val) {
      this.$emit("setChartStyle", val);
    },
    setChartData(val) {
      this.$emit("setChartData", val);
    },
  },
};
</script>