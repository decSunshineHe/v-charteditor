<template>
  <!-- 统计表格设置数据 -->
  <div class="setUp-data">
    <div class="setUp-item">
      <div class="release-title">
        <i class="icon-i"></i>
        <span class="main-span">数据源</span>
      </div>
      <div class="setUp-select">
        <span class="select-label">选择数据</span>
        <el-select
          v-model="sheetName"
          placeholder="请选择"
          @change="handleChangeSheet"
        >
          <el-option
            v-for="item in sheetList"
            :key="item.name"
            :label="item.name"
            :value="item.name"
          ></el-option>
        </el-select>
      </div>
    </div>
    <div class="setUp-item">
      <div class="release-title">
        <i class="icon-i"></i>
        <span class="main-span">数据绑定-X轴</span>
      </div>
      <div class="setUp-select">
        <span class="select-label">分类字段</span>
        <el-select v-model="xField" placeholder="请选择">
          <el-option
            v-for="field in fieldList"
            :key="field"
            :label="field"
            :value="field"
          ></el-option>
        </el-select>
      </div>
    </div>
    <div class="setUp-item">
      <div class="release-title">
        <i class="icon-i"></i>
        <span class="main-span">数据绑定-Y轴</span>
      </div>
      <div class="setUp-table">
        <div class="button-node-item">
          <div class="btn-item-box" @click="addField">
            <i class="iconfont icon-new-built"></i>
            <span class="btn-item-title">添加</span>
          </div>
          <div class="btn-item-box" @click="detField">
            <i class="iconfont icon-delete"></i>
            <span class="btn-item-title">删除</span>
          </div>
        </div>
        <div class="has-fuse-node">
          <div class="field-type">
            <span class="field-type-title">名称</span>
            <span class="field-type-title">值字段</span>
            <span class="field-type-title">统计方法</span>
          </div>
          <div class="field-type-node">
            <div
              class="field-type"
              :class="{ actNum: actNum == index }"
              v-for="(item, index) in YList"
              :key="item.id"
              @click="activeItem(item, index)"
            >
              <div class="field-type-item">
                <el-input v-model="item.YName"></el-input>
              </div>
              <div class="field-type-item">
                <el-select v-model="item.yField" placeholder="请选择">
                  <el-option
                    v-for="field in fieldList"
                    :key="field"
                    :label="field"
                    :value="field"
                  ></el-option>
                </el-select>
              </div>
              <div class="field-type-item">
                <el-select v-model="item.selMethod" placeholder="请选择">
                  <el-option
                    v-for="item in methods"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-button @click="handleRender">确定</el-button>
  </div>
</template>

<script>
import EventBus from "../../bus/eventBus";
export default {
  props: {
    sheetData: {},
    chartForm: {},
  },
  data() {
    return {
      sheetName: "",
      sortValue: "",
      fieldList: [],
      sheetRows: [],
      actNum: -1,
      methods: [
        {
          label: "求和",
          value: "sum",
        },
        {
          label: "平均",
          value: "avg",
        },
        {
          label: "计数",
          value: "count",
        },
      ],
      YList: [],
      sheetList: [],
      xField: "",
      sourceData: {},
      formData: {},
      xAxisData: [],
      series: [],
    };
  },
  computed: {
    dataConfig: {
      get: function () {
        return {
          source: {
            name: this.YList.map((v) => v.YName),
            xAxisData: this.xAxisData,
            series: this.series,
          },
          form: {
            sheetName: this.sheetName,
            xField: this.xField,
            YList: this.YList,
          },
        };
      },
    },
  },
  watch: {
    sheetData: {
      handler(newval) {
        if (Object.prototype.toString.call(newval) == "[object Array]") {
          this.sheetList = newval.map((v) => {
            let fields = [];
            if (v.rows && v.rows["0"]) {
              fields = Object.values(v.rows["0"]["cells"]).map((k) => k.text);
            }
            let rows = {
              length: Object.getOwnPropertyNames(v.rows).length,
              ...v.rows,
            };
            let temp = Array.prototype.slice.call(rows);
            return { name: v.name, fields: fields, rows: temp.slice(1) };
          });
        }
      },
      deep: true,
      immediate: true,
    },
    chartForm: {
      handler(newVal) {
        this.initFormData(newVal);
      },
      deep: true,
    },
  },
  mounted() {
    this.initFormData(this.chartForm);
  },
  methods: {
    //初始化数据设置
    initFormData(val) {
      let temp = JSON.parse(JSON.stringify(val));
      this.sheetName = temp.sheetName;
      if (this.sheetName) {
        this.handleChangeSheet(this.sheetName);
      }
      this.xField = temp.xField;
      this.YList = temp.YList;
    },
    //添加
    addField() {
      let tempY = {
        YName: "",
        yField: "",
        selMethod: "",
      };
      this.YList.push(tempY);
    },
    //删除
    detField() {
      this.YList.splice(this.actNum, 1);
      this.series.splice(this.actNum, 1);
      this.$emit("setChartData", this.dataConfig);
    },
    activeItem(data, index) {
      this.actNum = index;
    },
    //切换数据表
    handleChangeSheet(val) {
      for (let k = 0; k < this.sheetList.length; k++) {
        if (this.sheetList[k].name == val) {
          this.fieldList = this.sheetList[k].fields;
          this.sheetRows = this.sheetList[k].rows;
          break;
        }
      }
    },
    //确定
    handleRender() {
      let rows = this.sheetRows;
      let xIndex = this.fieldList.indexOf(this.xField);
      this.series = [];
      this.xAxisData = [];
      for (let m = 0; m < this.YList.length; m++) {
        let yField = this.YList[m].yField;
        let yIndex = this.fieldList.indexOf(yField);
        let yData = {};
        for (let n = 0; n < rows.length; n++) {
          if (rows[n]) {
            let cellX = rows[n]["cells"][xIndex.toString()]["text"];
            let cellY = rows[n]["cells"][yIndex.toString()]["text"];
            if (!yData[cellX]) {
              yData[cellX] = [];
            }
            yData[cellX].push(cellY);
          }
        }
        let seriesData = [];
        if (this.YList[m].selMethod == "sum") {
          for (let key in yData) {
            seriesData.push(this.sum(yData[key]).toFixed(2));
          }
        }
        let everySeries = {
          name: this.YList[m].YName,
          data: seriesData,
        };
        this.series.push(everySeries);
        this.xAxisData = Object.keys(yData);
      }
      this.$emit("setChartData", this.dataConfig);
    },
    //求和
    sum(arr) {
      return arr.reduce(function (prev, curr) {
        return prev + parseFloat(curr);
      }, 0);
    },
  },
};
</script>
<style lang="">
</style>