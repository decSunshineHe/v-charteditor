<template>
  <!-- 柱状图图表样式 -->
  <div class="setUp-style">
    <el-collapse v-model="activeNames" @change="handleChange">
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
              v-model="basicsForm.inputValue"
              placeholder="请输入内容"
            ></el-input>
          </div>
          <div class="setUp-select padding-botm">
            <span class="select-label">字体</span>
            <el-select v-model="basicsForm.value" placeholder="请选择">
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
              <span class="select-label">文字颜色</span>
              <el-color-picker
                v-model="basicsForm.color"
                :predefine="predefineColors"
              ></el-color-picker>
            </el-col>
            <el-col :span="6">
              <span class="select-label">文字大小</span>
              <el-input v-model="basicsForm.inputValue"></el-input>
            </el-col>
          </div>
          <div class="setUp-select setUp-input">
            <el-col :span="6">
              <span class="select-label">标题排列</span>
              <el-select v-model="basicsForm.arrayValue">
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
              <el-select v-model="basicsForm.styleValue">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-col>
          </div>
        </div>
        <div class="setUp-style-item setUp-item">
          <div class="release-title">
            <i class="icon-i"></i>
            <span class="main-span">背景</span>
          </div>
          <div class="setUp-select setUp-input">
            <el-col :span="6">
              <span class="select-label">颜色</span>
              <el-color-picker
                v-model="basicsForm.backColor"
                :predefine="predefineColors"
              ></el-color-picker>
            </el-col>
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
                <el-input v-model="basicsForm.widthValue"></el-input>
              </el-col>
              <el-col :span="6">
                <span class="select-label">高度</span>
                <el-input v-model="basicsForm.heightValue"></el-input>
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
                <el-input v-model="seniorForm.upValue"></el-input>
              </el-col>
              <el-col :span="6">
                <span class="select-label">下边距</span>
                <el-input v-model="seniorForm.downValue"></el-input>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <span class="select-label">左边距</span>
                <el-input v-model="seniorForm.leftValue"></el-input>
              </el-col>
              <el-col :span="6">
                <span class="select-label">右边距</span>
                <el-input v-model="seniorForm.rightValue"></el-input>
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
                <el-switch v-model="seniorForm.switchValue"></el-switch>
              </el-col>
              <el-col :span="6">
                <span class="select-label">排列方式</span>
                <el-select v-model="seniorForm.mode" placeholder="请选择">
                  <el-option
                    v-for="item in options"
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
                  v-model="seniorForm.textColor"
                  :predefine="predefineColors"
                ></el-color-picker>
              </el-col>
              <el-col :span="6">
                <span class="select-label">文字大小</span>
                <el-input v-model="seniorForm.textSize"></el-input>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <span class="select-label">字体</span>
                <el-select v-model="seniorForm.typeface" placeholder="请选择">
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
                  v-model="seniorForm.typefaceStyle"
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
            </el-row>
          </div>
        </div>
        <div class="setUp-style-item setUp-item">
          <div class="release-title">
            <i class="icon-i"></i>
            <span class="main-span">图表内容</span>
          </div>
          <div class="setUp-select padding-botm">
            <span class="select-label">条形间距</span>
            <el-select v-model="seniorForm.spacingValue" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div class="setUp-select setUp-input">
            <el-row>
              <el-col :span="6" class="switch-col">
                <span class="select-label">显示标签</span>
                <el-switch v-model="seniorForm.labelValue"></el-switch>
              </el-col>
              <el-col :span="6">
                <span class="select-label">文字颜色</span>
                <el-color-picker
                  v-model="seniorForm.wordColor"
                  :predefine="predefineColors"
                ></el-color-picker>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <span class="select-label">文字大小</span>
                <el-input v-model="seniorForm.wordSize"></el-input>
              </el-col>
              <el-col :span="6">
                <span class="select-label">字体样式</span>
                <el-select v-model="seniorForm.wordStyle" placeholder="请选择">
                  <el-option
                    v-for="item in options"
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
          <div class="setUp-select padding-botm">
            <span class="select-label">X轴名称</span>
            <el-select v-model="xForm.name" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div class="setUp-select padding-botm">
            <span class="select-label">字体</span>
            <el-select v-model="xForm.typeface" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div class="setUp-select setUp-input">
            <el-row>
              <el-col :span="6">
                <span class="select-label">文字颜色</span>
                <el-color-picker
                  v-model="xForm.textColor"
                  :predefine="predefineColors"
                ></el-color-picker>
              </el-col>
              <el-col :span="6">
                <span class="select-label">文字大小</span>
                <el-input v-model="xForm.textSize"></el-input>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <span class="select-label">旋转</span>
                <el-input v-model="xForm.rotate"></el-input>
              </el-col>
              <el-col :span="6">
                <span class="select-label">字体样式</span>
                <el-select v-model="xForm.wordStyle" placeholder="请选择">
                  <el-option
                    v-for="item in options"
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
                <span class="select-label">文字颜色</span>
                <el-color-picker
                  v-model="xForm.labelColor"
                  :predefine="predefineColors"
                ></el-color-picker>
              </el-col>
              <el-col :span="6">
                <span class="select-label">旋转</span>
                <el-input v-model="xForm.labelRotate"></el-input>
              </el-col>
            </el-row>
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
          <div class="setUp-select padding-botm">
            <span class="select-label">Y轴名称</span>
            <el-select v-model="yForm.name" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div class="setUp-select padding-botm">
            <span class="select-label">字体</span>
            <el-select v-model="yForm.typeface" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div class="setUp-select setUp-input">
            <el-row>
              <el-col :span="6">
                <span class="select-label">文字颜色</span>
                <el-color-picker
                  v-model="yForm.textColor"
                  :predefine="predefineColors"
                ></el-color-picker>
              </el-col>
              <el-col :span="6">
                <span class="select-label">文字大小</span>
                <el-input v-model="yForm.textSize"></el-input>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <span class="select-label">旋转</span>
                <el-input v-model="yForm.rotate"></el-input>
              </el-col>
              <el-col :span="6">
                <span class="select-label">字体样式</span>
                <el-select v-model="yForm.wordStyle" placeholder="请选择">
                  <el-option
                    v-for="item in options"
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
            <span class="main-span">Y轴标签</span>
          </div>
          <div class="setUp-select setUp-input">
            <el-row>
              <el-col :span="6">
                <span class="select-label">文字颜色</span>
                <el-color-picker
                  v-model="yForm.labelColor"
                  :predefine="predefineColors"
                ></el-color-picker>
              </el-col>
              <el-col :span="6">
                <span class="select-label">旋转</span>
                <el-input v-model="yForm.labelRotate"></el-input>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeNames: ["1", "2", "3", "4"],
      basicsForm: {
        inputValue: "",
        value: "",
        color: "#80A9FF",
        backColor: "#cccccc",
        xValue: "",
        yValue: "",
        widthValue: "",
        heightValue: "",
      },
      seniorForm: {
        upValue: "",
        downValue: "",
        leftValue: "",
        rightValue: "",
        switchValue: true,
        mode: "",
        textColor: "#666666",
        textSize: "",
        typeface: "",
        typefaceStyle: "",
        spacingValue: "",
        wordColor: "#333333",
        wordSize: "",
        wordStyle: "",
      },
      xForm: {
        name: "",
        typeface: "",
        textColor: "#666666",
        textSize: "",
        rotate: "",
        wordStyle: "",
        axisColor: "#cccccc",
        labelColor: "#666666",
        labelRotate: "",
      },
      yForm: {
        name: "",
        typeface: "",
        textColor: "#666666",
        textSize: "",
        rotate: "",
        wordStyle: "",
        axisColor: "#cccccc",
        labelColor: "#666666",
        labelRotate: "",
      },
      options: [
        {
          label: "黑体",
          value: "ht",
        },
        {
          label: "宋体",
          value: "st",
        },
        {
          label: "楷体",
          value: "kt",
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
  methods: {
    handleChange() {},
  },
};
</script>
<style lang="">
</style>