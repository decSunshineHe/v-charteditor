<template>
  <div id="xspreadsheet" class="table-echart"></div>
</template>

<script>
export default {
  props: {
    sheetData: {},
  },
  data() {
    return {
      sheet: null,
    };
  },
  watch: {
    sheetData: {
      handler(newval) {
        if (newval) {
          this.sheet.loadData(newval);
        }
      },
      deep: true,
    },
  },
  mounted() {
    this.initSheet();
  },
  methods: {
    //初始化表格编辑器
    initSheet() {
      x_spreadsheet.locale("zh-cn");
      this.sheet = x_spreadsheet("#xspreadsheet", this.configure)
        .loadData({})
        .change((cdata) => {});
    },
  },
};
</script>