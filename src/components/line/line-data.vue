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
        <el-select v-model="choiceValue" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
    </div>
    <div class="setUp-item">
      <div class="release-title">
        <i class="icon-i"></i>
        <span class="main-span">数据绑定</span>
      </div>
      <div class="setUp-select">
        <span class="select-label">分类字段</span>
        <el-select v-model="sortValue" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
    </div>
    <div class="setUp-item">
      <div class="release-title">
        <i class="icon-i"></i>
        <span class="main-span">数据绑定</span>
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
              v-for="(item, index) in fieldTypeData"
              :key="item.id"
              @click="activeItem(item, index)"
            >
              <div class="field-type-item">
                <el-input v-model="item.inputValue"></el-input>
              </div>
              <div class="field-type-item">
                <el-select v-model="selField" placeholder="请选择">
                  <el-option
                    v-for="item in item.fieldOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
              <div class="field-type-item">
                <el-select v-model="selMethod" placeholder="请选择">
                  <el-option
                    v-for="item in item.methodOptions"
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      choiceValue: "",
      sortValue: "",
      selField: "",
      selMethod: "",
      actNum: -1,
      options: [
        {
          label: "测试",
          value: "cs",
        },
        {
          label: "数据",
          value: "sj",
        },
      ],
      fieldContent: {
        inputValue: "",
        fieldOptions: [
          {
            label: "测试",
            value: "cs",
          },
          {
            label: "数据",
            value: "sj",
          },
        ],
        methodOptions: [
          {
            label: "测试",
            value: "cs",
          },
          {
            label: "数据",
            value: "sj",
          },
        ],
      },
      fieldTypeData: [],
    };
  },
  methods: {
    addField() {
      this.selField = "";
      this.selMethod = "";
      this.id = this.id + 1;
      let a = {
        ...this.fieldContent,
        id: this.id,
      };

      this.fieldTypeData.push(a);
    },
    detField() {
      this.fieldTypeData.splice(this.actNum, 1);
    },
    activeItem(data, index) {
      this.actNum = index;
    },
  },
};
</script>
<style lang="">
</style>