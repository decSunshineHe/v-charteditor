<template>
  <!-- 簇状柱状图 -->
  <div class="content-table">
    <div :id="'barChart' + index" class="echarts-item-list"></div>
  </div>
</template>
<script>
import { EleResize } from "../../utils/esresize";
import echarts from "echarts";
export default {
  props: {
    data: {
      type: Object,
      default: () => {
        return {};
      },
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      name: "柱状图",
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
      titleText: "柱状图",
      titleColor: "#666666",
      titleFamily: "sans-serif",
      titleStyle: "normal",
      titleSize: 20,
      gridTop: 40,
      gridLeft: 30,
      gridRight: 30,
      gridBottom: 60,
      legendShow: true,
      legendColor: "#666666",
      legendFamily: "sans-serif",
      legendStyle: "normal",
      legendSize: 12,
      xAxisLineColor: "#B8B8B8",
      xAxisName: "X轴",
      xAxisNameColor: "#666666",
      xAxisNameFamily: "sans-serif",
      xAxisNameStyle: "normal",
      xAxisNameSize: 12,
      xAxisLabelColor: "#666666",
      xAxisLabelFamily: "sans-serif",
      xAxisLabelStyle: "normal",
      xAxisLabelSize: 12,
      xAxisLabelRotate: 0,
      yAxisLineColor: "#B8B8B8",
      yAxisName: "X轴",
      yAxisNameColor: "#666666",
      yAxisNameFamily: "sans-serif",
      yAxisNameStyle: "normal",
      yAxisNameSize: 12,
      yAxisLabelColor: "#666666",
      yAxisLabelFamily: "sans-serif",
      yAxisLabelStyle: "normal",
      yAxisLabelSize: 12,
      yAxisLabelRotate: 0,
    };
  },
  computed: {
    option: {
      get: function () {
        return {
          title: {
            text: this.titleText,
            textStyle: {
              color: this.titleColor,
              fontStyle: this.titleStyle,
              fontFamily: this.titleFamily,
              fontSize: this.titleSize,
            },
            left: "center",
          },
          tooltip: {
            show: false,
          },
          grid: {
            top: this.gridTop,
            left: this.gridLeft,
            right: this.gridRight,
            bottom: this.gridBottom,
          },
          legend: {
            data: ["甲方", "乙方"],
            textStyle: {
              color: this.legendColor,
              fontFamily: this.legendFamily,
              fontSize: this.legendSize,
            },
            show: this.legendShow,
            bottom: 0,
            align: "auto",
            itemWidth: 14,
            itemHeight: 14,
          },
          xAxis: {
            name: this.xAxisName,
            nameTextStyle: {
              color: this.xAxisNameColor,
              fontFamily: this.xAxisNameFamily,
              fontSize: this.xAxisNameSize,
            },
            data: this.xAxisData,
            axisLine: {
              lineStyle: {
                color: this.xAxisLineColor,
              },
            },
            axisLabel: {
              color: this.xAxisLabelColor,
              fontStyle: this.xAxisLabelStyle,
              fontFamily: this.xAxisLabelFamily,
              fontSize: this.xAxisLabelSize,
              interval: 0, //标签设置为全部显示
              rotate: this.xAxisLabelRotate,
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
              
              name: this.yAxisName,
              nameLocation: "end", // 轴名称相对位置value
              nameTextStyle: {
                color: this.yAxisNameColor,
                fontFamily: this.yAxisNameFamily,
                fontSize: this.yAxisNameSize,
              },
              axisLine: {
                lineStyle: {
                  color: this.yAxisLineColor,
                },
              },
              splitLine: {
                show: true,
                lineStyle: {
                  color: "#DFE5EF",
                },
              },
              axisLabel: {
                color: this.yAxisLabelColor,
                fontStyle: this.yAxisLabelStyle,
                fontFamily: this.yAxisLabelFamily,
                fontSize: this.yAxisLabelSize,
                interval: 0, //标签设置为全部显示
                rotate: this.yAxisLabelRotate,
              },
            },
          ],
          series: [
            {
              name: "甲方",
              type: "bar",
              data: this.seriesData[0],
              barWidth: 24,
              itemStyle: {
                color: "#80A9FF",
              },
            },
            {
              name: "乙方",
              type: "bar",
              data: this.seriesData[1],
              barWidth: 24,
              itemStyle: {
                color: "#64E5BC",
              },
            },
          ],
        };
      },
      set: function (newval) {},
    },
  },
  mounted() {
    this.drawLoginBar(this.option);
  },
  watch: {
    data: {
      handler(newval) {
        if (newval) {
          this.changeData(newval);
        }
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    changeData(val) {
      if (val.style.basic) {
        this.titleText = val.style.basic.title;
        this.titleColor = val.style.basic.titleColor;
        this.titleStyle = val.style.basic.titleStyle;
        this.titleFamily = val.style.basic.titleFamily;
        this.titleSize = val.style.basic.titleSize;
        this.drawLoginBar();
      }
      if (val.style.senior) {
        this.gridTop = val.style.senior.gridTop;
        this.gridLeft = val.style.senior.gridLeft;
        this.gridRight = val.style.senior.gridRight;
        this.gridBottom = val.style.senior.gridBottom;
        this.legendShow = val.style.senior.legend;
        this.legendColor = val.style.senior.legendColor;
        this.legendStyle = val.style.senior.legendStyle;
        this.legendFamily = val.style.senior.legendFamily;
        this.legendSize = val.style.senior.legendSize;
        this.drawLoginBar();
      }
      if (val.style.xForm) {
        this.xAxisLineColor = val.style.xForm.axisColor;
        this.xAxisName = val.style.xForm.name;
        this.xAxisNameColor = val.style.xForm.nameColor;
        this.xAxisNameStyle = val.style.xForm.nameStyle;
        this.xAxisNameFamily = val.style.xForm.nameFamily;
        this.xAxisNameSize = val.style.xForm.nameSize;
        this.xAxisLabelColor = val.style.xForm.labelColor;
        this.xAxisLabelStyle = val.style.xForm.labelStyle;
        this.xAxisLabelFamily = val.style.xForm.labelFamily;
        this.xAxisLabelSize = val.style.xForm.labelSize;
        this.xAxisLabelRotate = val.style.xForm.labelRotate;
        this.drawLoginBar();
      }
      if (val.style.yForm) {
        this.yAxisLineColor = val.style.yForm.axisColor;
        this.yAxisName = val.style.yForm.name;
        this.yAxisNameColor = val.style.yForm.nameColor;
        this.yAxisNameStyle = val.style.yForm.nameStyle;
        this.yAxisNameFamily = val.style.yForm.nameFamily;
        this.yAxisNameSize = val.style.yForm.nameSize;
        this.yAxisLabelColor = val.style.yForm.labelColor;
        this.yAxisLabelStyle = val.style.yForm.labelStyle;
        this.yAxisLabelFamily = val.style.yForm.labelFamily;
        this.yAxisLabelSize = val.style.yForm.labelSize;
        this.yAxisLabelRotate = val.style.yForm.labelRotate;
        this.drawLoginBar();
      }
    },
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
    drawLoginBar() {
      let barChartDiv = document.getElementById(`barChart${this.index}`);
      let barChart = this.$echarts.init(barChartDiv);
      barChart.setOption(this.option);
      this.resizeChart(barChartDiv, barChart);
    },
  },
};
</script>
<style lang="">
</style>