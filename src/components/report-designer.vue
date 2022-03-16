<template>
  <div class="editor-box">
    <div class="left-new-box">
      <div class="basic-info btn-config-box">
        <el-upload
          class="upload-report"
          accept=".xlsx, .csv, .xls"
          multiple
          :limit="1"
          :on-exceed="handleExceed"
          action="https://jsonplaceholder.typicode.com/posts/"
          :http-request="httpRequest"
          :before-remove="beforeRemove"
        >
          <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>
      </div>
    </div>
    <div class="right-new-box">
      <div class="right-content-box" :class="{ 'expand-config-box': showSide }">
        <div class="right-top-box">
          <div class="tab-table-echart">
            <div
              class="tab-btn"
              :class="{ actTab: isShowChart == index }"
              @click="clickType(index)"
              v-for="(item, index) in tabsData"
              :key="index"
            >
              <div class="tab-btn-item">
                <svg-icon :value="item.className"></svg-icon>
                <span>{{ item.label }}</span>
              </div>
            </div>
          </div>
          <div class="right-top-item">
            <div class="right-top-btn" @click="handleClear">
              <i class="iconfont icon-push"></i>
              <span>清空</span>
            </div>
            <div class="right-top-btn" @click="handleExport">
              <i class="iconfont icon-push"></i>
              <span>导出</span>
            </div>
            <div class="right-top-btn" @click="handleSave">
              <i class="iconfont icon-preserve"></i>
              <span>保存</span>
            </div>
            <div
              class="right-top-btn"
              @click="showOpen"
              v-if="isShowChart == 1 && !showSide"
            >
              <i class="iconfont icon-form-six"></i>
            </div>
          </div>
        </div>
        <div class="right-main-box">
          <keep-alive>
            <table-designer
              :sheetData="sheetData"
              v-if="isShowChart == 0"
            ></table-designer>
          </keep-alive>
          <keep-alive>
            <chart-designer
              v-if="isShowChart == 1"
              :chartList="chartList"
              :chartIndex="chartIndex"
              @selectChart="selectChart"
            ></chart-designer>
          </keep-alive>
        </div>
        <div class="add-select-chart" v-if="isShowChart == 1">
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">新建图表</span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="table">表格</el-dropdown-item>
              <el-dropdown-item command="line">折线图</el-dropdown-item>
              <el-dropdown-item command="bar">柱状图</el-dropdown-item>
              <el-dropdown-item command="pie">饼状图</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <div class="right-config-box" v-show="showSide">
        <chart-config
          :type="chartInfo.type"
          :sheetData="sheetData"
          :chartData="chartInfo.data"
          :chartForm="chartInfo.form"
          :chartStyle="chartInfo.style"
          @setChartData="setChartData"
          @setChartStyle="setChartStyle"
          @closeSide="closeSide"
        ></chart-config>
      </div>
    </div>
  </div>
</template>
<script>
import XLSX from "xlsx";
import XStyle from "xlsx-style";
import Exchange from "xlsx-exchange";
// import { exchange } from "../utils/exchange";
// import EventBus from "../bus/eventBus";
import TableDesigner from "./make-table/table-designer";
import ChartDesigner from "./make-chart/chart-designer";
import ChartConfig from "./make-chart/chart-config";
import { BarData } from "../default/barData.js";
export default {
  components: {
    TableDesigner,
    ChartDesigner,
    ChartConfig
  },
  data() {
    return {
      isShowChart: 0,
      showSide: false,
      sheet: null,
      configure: {
        showToolbar: true,
        showGrid: true,
        showContextmenu: true,
        row: {
          height: 25
        },
        col: {
          width: 100
        }
      },
      tabsData: [
        {
          label: "表格",
          className: "form-two",
          value: "bg"
        },
        {
          label: "图表",
          className: "form-one",
          value: "tb"
        }
      ],
      chartList: [],
      chartInfo: {},
      chartIndex: -1,
      sheetData: {}
    };
  },
  methods: {
    clickType(index) {
      this.isShowChart = index;
      if (index == 0) {
        this.showSide = false;
      }
    },
    closeSide(val) {
      this.showSide = false;
    },
    showOpen() {
      this.showSide = true;
    },
    //获取当前选中的图表index
    selectChart(val) {
      this.chartIndex = val;
      this.chartInfo = this.chartList[val];
    },
    //设置图表样式
    setChartStyle(val) {
      this.$set(this.chartList[this.chartIndex].style, val.key, val.value);
      this.$set(this.chartList, this.chartIndex, this.chartInfo);
    },
    //设置图表数据
    setChartData(val) {
      this.$set(this.chartList[this.chartIndex], "data", val.source);
      this.$set(this.chartList[this.chartIndex], "form", val.form);
      this.$set(this.chartList, this.chartIndex, this.chartInfo);
    },
    //新建
    handleCommand(command) {
      this.chartIndex = this.chartList.length;
      this.chartInfo = JSON.parse(JSON.stringify(BarData));
      this.chartInfo.id = this.chartList.length;
      this.chartList.push(this.chartInfo);
    },
    //上传数据
    httpRequest(inputfile) {
      let file = inputfile.file;
      var reader = new FileReader();
      let that = this;
      reader.onload = function(e) {
        var data = e.target.result;
        var wbs = XStyle.read(data, { type: "binary", cellStyles: true });
        var wb = XLSX.read(data, { type: "binary", cellStyles: true });
        //stox中第二个参数为非必传
        let out = Exchange.stox(wbs, wb);
        that.sheetData = out;
      };
      reader.readAsBinaryString(file);
    },
    //删除当前文件
    beforeRemove(file, fileList) {
      this.sheetData = {};
    },
    //限制文件个数
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 1 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    //保存报表
    handleSave() {
      const that = this;
      let sheetData = this.sheet.getData();
      let tableWidth = this.getColWidthsBySheet(sheetData);
      let imageData = this.saveImage(tableWidth + 4);
      let sheetDataStr = JSON.stringify(this.sheet.getData());
    },
    //清空报表
    handleClear() {
      this.sheet.loadData({});
    },
    saveImage(tWidth) {
      let canvasEle = this.$el.querySelector(
        "#xspreadsheet .x-spreadsheet-table"
      );
      var offsetX = 58,
        offsetY = 24;
      var tHeight = canvasEle.height;
      var canvas = document.createElement("canvas");
      canvas.width = tWidth;
      canvas.height = tHeight;
      var ctxExport = canvas.getContext("2d");
      // ctxExport.mozImageSmoothingEnabled = false;
      // ctxExport.webkitImageSmoothingEnabled = false;
      // ctxExport.msImageSmoothingEnabled = false;
      // ctxExport.imageSmoothingEnabled = false;

      var imgData = ctxExport.getImageData(0, 0, canvas.width, canvas.height);
      for (var i = 0; i < imgData.data.length; i += 4) {
        if (imgData.data[i + 3] == 0) {
          imgData.data[i] = 255;
          imgData.data[i + 1] = 255;
          imgData.data[i + 2] = 255;
          imgData.data[i + 3] = 255;
        }
      }
      //调用
      ctxExport.drawImage(
        canvasEle,
        58,
        24,
        tWidth,
        tHeight,
        0,
        0,
        tWidth,
        tHeight
      );
      var imgData = canvas.toDataURL();
      return imgData;
    },
    //获取表格宽度
    getColWidthsBySheet(sheetData) {
      let colsWidth = 0;
      let rows = sheetData[0]["rows"];
      let maxCol = 0;
      for (let key in rows) {
        if (key != "len") {
          let cells = Object.keys(rows[key]["cells"]);
          if (cells[cells.length - 1] > maxCol)
            maxCol = cells[cells.length - 1];
        }
      }
      maxCol++;
      let cols = sheetData[0]["cols"];
      for (let key in cols) {
        if (key != "len") {
          colsWidth += cols[key]["width"];
          maxCol--;
        }
      }
      colsWidth += maxCol * this.configure["col"]["width"];
      return colsWidth;
    },
    //导出数据
    handleExport() {
      // var new_wb = exchange.xtos(this.sheet.getData());
      // XLSX.writeFile(new_wb, "SheetJS.xlsx");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-dropdown-link {
  display: inline-block;
  width: 100px;
  height: 30px;
  cursor: pointer;
  font-size: 16px;
  line-height: 30px;
  text-align: center;
  background-color: #409eff;
  color: #fff;
  border-radius: 4px;
}
</style>
