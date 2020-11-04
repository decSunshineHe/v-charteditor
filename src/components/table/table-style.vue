<template>
  <!-- 表格设置样式 -->
  <div class="setUp-data">
    <div class="setUp-item">
      <div class="release-title">
        <i class="icon-i"></i>
        <span class="main-span">标题</span>
      </div>
      <div class="setUp-select setUp-input">
        <span class="select-label">标题内容</span>
        <el-input
          v-model="styleForm.inputValue"
          placeholder="请输入内容"
        ></el-input>
      </div>
      <div class="setUp-select padding-botm">
        <span class="select-label">字体</span>
        <el-select v-model="styleForm.value" placeholder="请选择">
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
            v-model="styleForm.color"
            :predefine="predefineColors"
          ></el-color-picker>
        </el-col>
        <el-col :span="6">
          <span class="select-label">文字大小</span>
          <el-input v-model="styleForm.inputValue"></el-input>
        </el-col>
      </div>
      <div class="setUp-select setUp-input">
        <el-col :span="6">
          <span class="select-label">排列</span>
          <el-select v-model="styleForm.arrayValue">
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
          <el-select v-model="styleForm.styleValue">
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
    <div class="setUp-item">
      <div class="release-title">
        <i class="icon-i"></i>
        <span class="main-span">表格内容</span>
      </div>
      <div class="setUp-select setUp-input">
        <el-col :span="6">
          <span class="select-label">大小</span>
          <el-select v-model="styleForm.sizeValue">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :span="6">
          <span class="select-label">排列</span>
          <el-select v-model="styleForm.colValue">
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
    <div class="setUp-item">
      <div class="release-title">
        <i class="icon-i"></i>
        <span class="main-span">背景</span>
      </div>
      <div class="setUp-select setUp-input">
        <el-col :span="6">
          <span class="select-label">颜色</span>
          <el-color-picker
            v-model="styleForm.backColor"
            :predefine="predefineColors"
          ></el-color-picker>
        </el-col>
      </div>
    </div>
    <div class="setUp-item">
      <div class="release-title">
        <i class="icon-i"></i>
        <span class="main-span">布局</span>
      </div>
      <div class="setUp-select setUp-input">
        <el-row>
          <el-col :span="6">
            <span class="select-label">X</span>
            <el-input v-model="styleForm.xValue"></el-input>
          </el-col>
          <el-col :span="6">
            <span class="select-label">Y</span>
            <el-input v-model="styleForm.yValue"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <span class="select-label">宽度</span>
            <el-input v-model="styleForm.widthValue"></el-input>
          </el-col>
          <el-col :span="6">
            <span class="select-label">高度</span>
            <el-input v-model="styleForm.heightValue"></el-input>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      styleForm: {
        inputValue: "",
        value: "",
        color: "#F6585C",
        arrayValue: "",
        styleValue: "",
        sizeValue: "",
        colValue: "",
        backColor: "#EFEFEF",
        xValue: "",
        yValue: "",
        widthValue: "",
        heightValue: "",
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
};
</script>
<style lang="">
</style>