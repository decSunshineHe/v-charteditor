<template>
  <!-- 柱状图图表样式 -->
  <div class="setUp-style">
    <el-collapse v-model="activeNames">
      <el-collapse-item name="1">
        <template slot="title">
          <i class="iconfont icon-right"></i>
          基础样式
        </template>
        <div class="setUp-style-item setUp-item">
          <div class="release-title">
            <i class="icon-i"></i>
            <span class="main-span">标题</span>
          </div>
          <div class="setUp-select setUp-input">
            <span class="select-label">标题内容</span>
            <el-input v-model="basic.title" placeholder="请输入内容"></el-input>
          </div>
          <div class="setUp-select padding-botm">
            <span class="select-label">字体</span>
            <el-select
              v-model="basic.titleFamily"
              placeholder="请选择"
              :popper-append-to-body="false"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          
          <div class="setUp-select setUp-input">
            <el-col :span="6">
              <span class="select-label">文字大小</span>
              <el-input-number
                class="small-input-number"
                size="small"
                v-model="basic.titleSize"
                :min="20"
                :max="30"
              ></el-input-number>
            </el-col>
            <el-col :span="6">
              <span class="select-label">字体样式</span>
              <el-select v-model="basic.titleStyle">
                <el-option
                  v-for="item in fontStyleOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-col>
          </div>
          <div class="setUp-select padding-botm">
            <span class="select-label">文字颜色</span>
            <el-color-picker
              v-model="basic.titleColor"
              :predefine="predefineColors"
            ></el-color-picker>
          </div>
        </div>
        <div class="setUp-style-item setUp-item">
          <div class="release-title">
            <i class="icon-i"></i>
            <span class="main-span">布局</span>
          </div>
          <div class="setUp-select setUp-input">
            <el-row>
              <el-col :span="6">
                <span class="select-label">X</span>
                <el-input v-model="basic.xValue"></el-input>
              </el-col>
              <el-col :span="6">
                <span class="select-label">Y</span>
                <el-input v-model="basic.yValue"></el-input>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <span class="select-label">宽度</span>
                <el-input v-model="basic.width"></el-input>
              </el-col>
              <el-col :span="6">
                <span class="select-label">高度</span>
                <el-input v-model="basic.height"></el-input>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-collapse-item>
      <el-collapse-item name="2">
        <template slot="title">
          <i class="iconfont icon-right"></i>
          高级样式
        </template>
        <div class="setUp-style-item setUp-item">
          <div class="release-title">
            <i class="icon-i"></i>
            <span class="main-span">图表边距</span>
          </div>
          <div class="setUp-select setUp-input">
            <el-row>
              <el-col :span="6">
                <span class="select-label">上边距</span>
                <el-input v-model="senior.gridTop"></el-input>
              </el-col>
              <el-col :span="6">
                <span class="select-label">下边距</span>
                <el-input v-model="senior.gridBottom"></el-input>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <span class="select-label">左边距</span>
                <el-input v-model="senior.gridLeft"></el-input>
              </el-col>
              <el-col :span="6">
                <span class="select-label">右边距</span>
                <el-input v-model="senior.gridRight"></el-input>
              </el-col>
            </el-row>
          </div>
        </div>
        <div class="setUp-style-item setUp-item">
          <div class="release-title">
            <i class="icon-i"></i>
            <span class="main-span">图例</span>
          </div>
          <div class="setUp-select setUp-input">
            <el-row>
              <el-col :span="6" class="switch-col">
                <span class="select-label">显示图例</span>
                <el-switch v-model="senior.legend"></el-switch>
              </el-col>
              <el-col :span="6">
                <span class="select-label">排列方式</span>
                <el-select v-model="senior.orient" placeholder="请选择">
                  <el-option
                    v-for="item in orientOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <span class="select-label">文字颜色</span>
                <el-color-picker
                  v-model="senior.legendColor"
                  :predefine="predefineColors"
                ></el-color-picker>
              </el-col>
              <el-col :span="6">
                <span class="select-label">文字大小</span>
                <el-input-number
                  size="small"
                  v-model="senior.legendSize"
                  :min="10"
                  :max="20"
                ></el-input-number>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <span class="select-label">字体</span>
                <el-select v-model="senior.legendFamily" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-col>
              <el-col :span="6">
                <span class="select-label">字体样式</span>
                <el-select v-model="senior.legendStyle" placeholder="请选择">
                  <el-option
                    v-for="item in fontStyleOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-collapse-item>
      <el-collapse-item name="3">
        <template slot="title">
          <i class="iconfont icon-right"></i>
          X轴样式
        </template>
        <div class="setUp-style-item setUp-item">
          <div class="release-title">
            <i class="icon-i"></i>
            <span class="main-span">X轴名称</span>
          </div>
          <div class="setUp-select setUp-input">
            <span class="select-label">X轴名称</span>
            <el-input v-model="xForm.name" placeholder="请输入内容"></el-input>
          </div>
          <div class="setUp-select setUp-input">
            <el-row>
              <el-col :span="6">
                <span class="select-label">文字颜色</span>
                <el-color-picker
                  v-model="xForm.nameColor"
                  :predefine="predefineColors"
                ></el-color-picker>
              </el-col>
              <el-col :span="6">
                <span class="select-label">文字大小</span>
                <el-input-number
                  size="small"
                  v-model="xForm.nameSize"
                  :min="10"
                  :max="20"
                ></el-input-number>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <span class="select-label">字体</span>
                <el-select v-model="xForm.nameFamily" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-col>
              <el-col :span="6">
                <span class="select-label">字体样式</span>
                <el-select v-model="xForm.nameStyle" placeholder="请选择">
                  <el-option
                    v-for="item in fontStyleOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-col>
            </el-row>
          </div>
          <div class="setUp-select padding-botm">
            <span class="select-label">轴线颜色</span>
            <el-color-picker
              v-model="xForm.axisColor"
              :predefine="predefineColors"
            ></el-color-picker>
          </div>
        </div>
        <div class="setUp-style-item setUp-item">
          <div class="release-title">
            <i class="icon-i"></i>
            <span class="main-span">X轴标签</span>
          </div>
          <div class="setUp-select setUp-input">
            <el-row>
              <el-col :span="6">
                <span class="select-label">旋转</span>
                <el-input v-model="xForm.labelRotate"></el-input>
              </el-col>
              <el-col :span="6">
                <span class="select-label">文字大小</span>
                <el-input-number
                  size="small"
                  v-model="xForm.labelSize"
                  :min="10"
                  :max="20"
                ></el-input-number>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <span class="select-label">字体</span>
                <el-select v-model="xForm.labelFamily" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-col>
              <el-col :span="6">
                <span class="select-label">字体样式</span>
                <el-select v-model="xForm.labelStyle" placeholder="请选择">
                  <el-option
                    v-for="item in fontStyleOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-col>
            </el-row>
          </div>
          <div class="setUp-select padding-botm">
            <span class="select-label">文字颜色</span>
            <el-color-picker
              v-model="xForm.labelColor"
              :predefine="predefineColors"
            ></el-color-picker>
          </div>
        </div>
      </el-collapse-item>
      <el-collapse-item name="4">
        <template slot="title">
          <i class="iconfont icon-right"></i>
          Y轴样式
        </template>
        <div class="setUp-style-item setUp-item">
          <div class="release-title">
            <i class="icon-i"></i>
            <span class="main-span">Y轴名称</span>
          </div>
          <div class="setUp-select setUp-input">
            <span class="select-label">Y轴名称</span>
            <el-input v-model="yForm.name" placeholder="请输入内容"></el-input>
          </div>
          <div class="setUp-select setUp-input">
            <el-row>
              <el-col :span="6">
                <span class="select-label">文字颜色</span>
                <el-color-picker
                  v-model="yForm.nameColor"
                  :predefine="predefineColors"
                ></el-color-picker>
              </el-col>
              <el-col :span="6">
                <span class="select-label">文字大小</span>
                <el-input-number
                  size="small"
                  v-model="yForm.nameSize"
                  :min="10"
                  :max="20"
                ></el-input-number>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <span class="select-label">字体</span>
                <el-select v-model="yForm.nameFamily" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-col>
              <el-col :span="6">
                <span class="select-label">字体样式</span>
                <el-select v-model="yForm.nameStyle" placeholder="请选择">
                  <el-option
                    v-for="item in fontStyleOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-col>
            </el-row>
          </div>
          <div class="setUp-select padding-botm">
            <span class="select-label">轴线颜色</span>
            <el-color-picker
              v-model="yForm.axisColor"
              :predefine="predefineColors"
            ></el-color-picker>
          </div>
        </div>
        <div class="setUp-style-item setUp-item">
          <div class="release-title">
            <i class="icon-i"></i>
            <span class="main-span">y轴标签</span>
          </div>
          <div class="setUp-select setUp-input">
            <el-row>
              <el-col :span="6">
                <span class="select-label">旋转</span>
                <el-input v-model="yForm.labelRotate"></el-input>
              </el-col>
              <el-col :span="6">
                <span class="select-label">文字大小sss</span>
                <el-input-number
                  size="small"
                  v-model="yForm.labelSize"
                  :min="10"
                  :max="20"
                ></el-input-number>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <span class="select-label">字体</span>
                <el-select v-model="yForm.labelFamily" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-col>
              <el-col :span="6">
                <span class="select-label">字体样式</span>
                <el-select v-model="yForm.labelStyle" placeholder="请选择">
                  <el-option
                    v-for="item in fontStyleOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-col>
            </el-row>
          </div>
          <div class="setUp-select padding-botm">
            <span class="select-label">文字颜色</span>
            <el-color-picker
              v-model="yForm.labelColor"
              :predefine="predefineColors"
            ></el-color-picker>
          </div>
        </div>
      </el-collapse-item>
      <el-collapse-item name="5" v-if="barList.length">
        <template slot="title">
          <i class="iconfont icon-right"></i>
          其他样式
        </template>
        <div
          class="setUp-style-item setUp-item"
          v-for="(item, index) in barList"
          :key="index"
        >
          <div class="release-title">
            <i class="icon-i"></i>
            <span class="main-span">{{ item.barName }}</span>
          </div>
          <div class="setUp-select setUp-input">
            <el-row>
              <el-col :span="6" class="switch-col">
                <span class="select-label">显示标注</span>
                <el-switch v-model="item.barLabel"></el-switch>
              </el-col>
              <el-col :span="6">
                <span class="select-label">柱宽</span>
                <el-input v-model="item.barWidth"></el-input>
              </el-col>
            </el-row>
          </div>
          <div class="setUp-select padding-botm">
            <span class="select-label">柱体颜色</span>
            <el-color-picker
              v-model="item.barColor"
              :predefine="predefineColors"
            ></el-color-picker>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
import EventBus from "../../bus/eventBus";
import { limit } from "../../utils/limit.js";
export default {
  props: ["chartData", "chartStyle"],
  data() {
    return {
      activeNames: ["1"],
      basic: {
        title: "柱状图",
        titleFamily: "Microsoft YaHei",
        titleStyle: "normal",
        titleSize: 20,
        titleColor: "#666666",
        xValue: "",
        yValue: "",
        width: "",
        height: "",
      },
      senior: {
        gridTop: 40,
        gridBottom: 60,
        gridLeft: 50,
        gridRight: 30,
        legend: true,
        orient: "horizontal",
        legendColor: "#666666",
        legendSize: 12,
        legendFamily: "SimSun",
        legendStyle: "normal",
        space: "",
        fontColor: "#333333",
        fontSize: 12,
        fontStyle: "normal",
      },
      xForm: {
        name: "",
        nameFamily: "SimSun",
        nameColor: "#666666",
        nameSize: 12,
        nameStyle: "normal",
        axisColor: "#cccccc",
        labelFamily: "SimSun",
        labelColor: "#666666",
        labelSize: 12,
        labelStyle: "normal",
        labelRotate: 0,
      },
      yForm: {
        name: "",
        nameFamily: "SimSun",
        nameColor: "#666666",
        nameSize: 12,
        nameStyle: "normal",
        axisColor: "#cccccc",
        labelFamily: "SimSun",
        labelColor: "#666666",
        labelSize: 12,
        labelStyle: "normal",
        labelRotate: 0,
      },
      barList: [],
      orientOptions: [
        {
          label: "水平",
          value: "horizontal",
        },
        {
          label: "垂直",
          value: "vertical",
        },
      ],
      fontStyleOptions: [
        {
          label: "正常",
          value: "normal",
        },
        {
          label: "斜体",
          value: "italic",
        },
        {
          label: "倾斜",
          value: "oblique",
        },
      ],
      options: [
        {
          label: "黑体",
          value: "SimHei",
        },
        {
          label: "宋体",
          value: "SimSun",
        },
        {
          label: "楷体",
          value: "KaiTi",
        },
        {
          label: "微软雅黑",
          value: "Microsoft YaHei",
        },
      ],
      predefineColors: [
        "#80A9FF",
        "#64E5BC",
        "#ffd700",
        "#90ee90",
        "#00ced1",
        "#1e90ff",
        "#c71585",
      ],
    };
  },
  mounted() {
    this.initStyle(this.chartStyle);
  },
  methods: {
    //提交样式设置
    commitStyle(key, val) {
      this.$emit("setStyle", { key: key, value: val });
    },
    //初始化样式
    initStyle(val) {
      for (let key in val) {
        this.$data[key] = val[key];
      }
    },
  },
  watch: {
    chartStyle: {
      handler(newVal) {
        if (newVal) {
          this.initStyle(newVal);
        }
      },
      deep: true,
    },
    chartData: {
      handler(newVal) {
        if (newVal && newVal.name) {
          let prevBarList = JSON.parse(JSON.stringify(this.barList));
          let prevNameList = prevBarList.map((v) => v.barName);
          this.barList = [];
          //实时删除柱子，每次只会删除一类
          if (prevBarList.length > newVal.name.length) {
            newVal.name.forEach((val, index) => {
              let prevIndex = prevNameList.indexOf(val);
              if (prevIndex > -1) {
                this.barList.push(prevBarList[prevIndex]);
              }
            });
          }
          //确定-批量新增柱子，每次可以新增多类
          else {
            let exsitColors = [];
            //第一次遍历，如果上一次barList中存在这一条，则保留,记住上一次的颜色设置
            newVal.name.forEach((val, index) => {
              let prevIndex = prevNameList.indexOf(val);
              if (prevIndex > -1) {
                this.barList.push(prevBarList[prevIndex]);
                exsitColors.push(prevBarList[prevIndex].barColor);
              }
            });
            let remainColors = this.predefineColors.filter(
              (item) => !exsitColors.includes(item)
            );
            let count = 0;
            //第二次遍历，如果上一次barList中不存在这一条，则新增，从预定义颜色列表中获取未使用过的颜色
            newVal.name.forEach((val, index) => {
              let prevIndex = prevNameList.indexOf(val);
              if (prevIndex == -1) {
                this.barList.push({
                  barName: val,
                  barColor: remainColors[count++],
                  barLabel: false,
                  barWidth: 24,
                });
              }
            });
          }
        } else {
          this.barList = [];
        }
      },
      deep: true,
    },
    basic: {
      handler(newVal) {
        this.commitStyle("basic", newVal);
      },
      deep: true,
    },
    senior: {
      handler(newVal) {
        this.commitStyle("senior", newVal);
      },
      deep: true,
    },
    xForm: {
      handler(newVal) {
        this.commitStyle("xForm", newVal);
      },
      deep: true,
    },
    yForm: {
      handler(newVal) {
        this.commitStyle("yForm", newVal);
      },
      deep: true,
    },
    barList: {
      handler(newVal) {
        this.commitStyle("barList", newVal);
      },
      deep: true,
    },
  },
};
</script>
<style lang="">
  .setUp-input .el-input-number.small-input-number {
    width: 80px;
  }
  .setUp-input .el-input-number.small-input-number .el-input-number__decrease,
  .setUp-input .el-input-number.small-input-number .el-input-number__increase {
    width: 24px;
  }
  .setUp-input .el-input-number.small-input-number .el-input.el-input--small {
    width: 100%;
  }
  .setUp-input .el-input-number.small-input-number .el-input.el-input--small .el-input__inner {
    padding-left: 26px;
    padding-right: 26px;
    line-height: 33px;
  }
</style>