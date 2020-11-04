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
            <el-input
              v-model="basicsForm.title"
              placeholder="请输入内容"
            ></el-input>
          </div>
          <div class="setUp-select padding-botm">
            <span class="select-label">字体</span>
            <el-select v-model="basicsForm.titleFamily" placeholder="请选择" :popper-append-to-body="false">
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
              <el-input v-model="basicsForm.titleSize"></el-input>
            </el-col>
            <el-col :span="6">
              <span class="select-label">字体样式</span>
              <el-select v-model="basicsForm.titleStyle">
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
              v-model="basicsForm.titleColor"
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
                <el-input v-model="basicsForm.xValue"></el-input>
              </el-col>
              <el-col :span="6">
                <span class="select-label">Y</span>
                <el-input v-model="basicsForm.yValue"></el-input>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <span class="select-label">宽度</span>
                <el-input v-model="basicsForm.width"></el-input>
              </el-col>
              <el-col :span="6">
                <span class="select-label">高度</span>
                <el-input v-model="basicsForm.height"></el-input>
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
                <el-input v-model="seniorForm.gridTop"></el-input>
              </el-col>
              <el-col :span="6">
                <span class="select-label">下边距</span>
                <el-input v-model="seniorForm.gridBottom"></el-input>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <span class="select-label">左边距</span>
                <el-input v-model="seniorForm.gridLeft"></el-input>
              </el-col>
              <el-col :span="6">
                <span class="select-label">右边距</span>
                <el-input v-model="seniorForm.gridRight"></el-input>
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
                <el-switch v-model="seniorForm.legend"></el-switch>
              </el-col>
              <el-col :span="6">
                <span class="select-label">排列方式</span>
                <el-select v-model="seniorForm.orient" placeholder="请选择">
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
                  v-model="seniorForm.legendColor"
                  :predefine="predefineColors"
                ></el-color-picker>
              </el-col>
              <el-col :span="6">
                <span class="select-label">文字大小</span>
                <el-input v-model="seniorForm.legendSize"></el-input>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <span class="select-label">字体</span>
                <el-select
                  v-model="seniorForm.legendFamily"
                  placeholder="请选择"
                >
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
                <el-select
                  v-model="seniorForm.legendStyle"
                  placeholder="请选择"
                >
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
                <el-input v-model="xForm.labelSize"></el-input>
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
                <el-input v-model="yForm.nameSize"></el-input>
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
                <span class="select-label">文字大小</span>
                <el-input v-model="yForm.labelSize"></el-input>
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
    </el-collapse>
  </div>
</template>
<script>
import { limit } from "../../utils/limit.js";
export default {
  props: ["chartStyle"],
  data() {
    return {
      activeNames: ["1", "2"],
      basicsForm: {
        title: "",
        titleFamily: "Microsoft YaHei",
        titleStyle: "normal",
        titleSize: 20,
        titleColor: "#80A9FF",
        xValue: "",
        yValue: "",
        width: "",
        height: "",
      },
      seniorForm: {
        gridTop: 40,
        gridBottom: 60,
        gridLeft: 30,
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
        "#ff4500",
        "#ff8c00",
        "#ffd700",
        "#90ee90",
        "#00ced1",
        "#1e90ff",
        "#c71585",
      ],
    };
  },
  created() {},
  methods: {
    commit(key, val) {
      this.$emit("setStyle", { key: key, value: val });
    },
  },
  watch: {
    basicsForm: {
      handler(newVal) {
        this.$emit("setStyle", { key: "basic", value: newVal });
      },
      deep: true,
      immediate: true,
    },
    seniorForm: {
      handler(newVal) {
        this.$emit("setStyle", { key: "senior", value: newVal });
      },
      deep: true,
      immediate: true,
    },
    xForm: {
      handler(newVal) {
        this.$emit("setStyle", { key: "xForm", value: newVal });
      },
      deep: true,
      immediate: true,
    },
    yForm: {
      handler(newVal) {
        this.$emit("setStyle", { key: "yForm", value: newVal });
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>
<style lang="">
</style>