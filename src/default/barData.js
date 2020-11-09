export const BarData = {
    id: 0,
    type: "bar",
    form: { sheetName: "", xField: "", YList: [] },
    data: {
        name: ["甲方", "乙方"],
        xAxisData: ["2016", "2017", "2018", "2019", "2020"],
        series: [{ name: "甲方", data: ["35", "20", "45", "36", "30"] }, { name: "乙方", data: ["25", "30", "15", "46", "20"] }],
    },
    style: {
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
        barList: [
            {
                barName: "面积A",
                barColor: "#80A9FF",
                barLabel: false,
                barWidth: 24,
            },
        ],
    },
}