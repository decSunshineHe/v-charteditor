<template>
  <!-- 簇状柱状图 -->
  <div class="content-table">
    <div class="table-item-title">{{ data.name }}</div>
    <div :id="'lineChart' + index" class="echarts-item-list"></div>
  </div>
</template>
<script>
import { EleResize } from "../../utils/esresize";
import echarts from "echarts";
export default {
  props: ["data", "index"],
  data() {
    return {
      name: "折线图",
      actNum: -1,
      xAxisData: [
        "2010",
        "2011",
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
      ],
      seriesData: [
        [80, 53, 68, 82, 87, 80, 82, 60, 78],
        [40, 20, 55, 62, 45, 36, 48, 38, 60],
      ],
    };
  },
  mounted() {
    this.drawLine();
  },
  updated() {},
  methods: {
    // 图表自适应
    resizeChart(eleDiv, ele) {
      let listener = function () {
        ele.resize();
      };
      EleResize.on(eleDiv, listener);
    },
    showTableItem() {
      this.chartsData.splice(this.actNum, 1);
    },
    actTable(item, index) {
      this.actNum = index;
    },
    drawLine() {
      let lineChartDiv = document.getElementById(`lineChart${this.index}`);
      let lineChart = this.$echarts.init(lineChartDiv);
      lineChart.setOption({
        tooltip: {
          show: false,
        },
        grid: {
          top: 40,
          left: 40,
          right: 30,
          bottom: 80,
        },
        legend: {
          data: ["甲方", "乙方"],
          bottom: 20,
          align: "auto",
          itemWidth: 14,
          itemHeight: 14,
        },
        xAxis: {
          data: this.xAxisData,
          axisLine: {
            lineStyle: {
              color: "#B8B8B8",
            },
          },
          axisLabel: {
            color: "#333",
            interval: 0, //标签设置为全部显示
            formatter: function (val) {
              let strs = val.split("");
              let str = "";
              for (let i = 0, s; (s = strs[i++]); ) {
                str += s;
                if (!(i % 7)) str += "\n";
              }
              return str;
            },
          },
        },
        yAxis: [
          {
            nameLocation: "end", // 轴名称相对位置value
            nameTextStyle: {
              color: "#919293",
            },
            axisLine: {
              lineStyle: {
                color: "#B8B8B8",
              },
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: "#DFE5EF",
              },
            },
            axisLabel: {
              color: "#333",
            },
          },
          {
            type: "value",
            name: "单位：平方千米",
            nameTextStyle: {
              color: "#333333",
              padding: [0, 0, 0, -90],
            },
            axisLine: {
              lineStyle: {
                color: "#DFE5EF",
              },
            },
          },
        ],
        series: [
          {
            name: "甲方",
            type: "line",
            data: this.seriesData[0],
            barWidth: 24,
            itemStyle: {
              color: "#80A9FF",
            },
          },
          {
            name: "乙方",
            type: "line",
            data: this.seriesData[1],
            barWidth: 24,
            itemStyle: {
              color: "#64E5BC",
            },
          },
        ],
      });
      this.resizeChart(lineChartDiv, lineChart);
    },
  },
};
</script>
<style lang="">
</style>