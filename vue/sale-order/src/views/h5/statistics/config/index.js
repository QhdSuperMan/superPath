export const configMixins = {
  data() {
    return {
      callStatisticsBox: [
        {
          label: "总时长",
          key: "total_duration",
          color: "#5470c6",
          img: require("@/assets/img/h5/statistics/total-duration.png"),
        },
        {
          label: "平均时长",
          key: "average_duration",
          color: "#91cc75",
          img: require("@/assets/img/h5/statistics/average-duration.png"),
        },
        {
          label: "拨打量（个）",
          key: "total_num",
          color: "#fac858",
          img: require("@/assets/img/h5/statistics/put-on.png"),
        },
        {
          label: "接通量",
          key: "connect_num",
          color: "#ee6666",
          img: require("@/assets/img/h5/statistics/dial.png"),
        },
        {
          label: "接通率（%）",
          key: "connect_ratio",
          color: "#73c0de",
          img: require("@/assets/img/h5/statistics/put-on-rate.png"),
        },
      ],
      customerStatisticsBox: [
        {
          label: "总客户量(个)",
          key: "customer_count",
          color: "#5470c6",
          img: require("@/assets/img/h5/statistics/customer_count.png"),
        },
      ],
      orderStatisticsBox: [
        {
          label: "订单数量",
          key: "order_count",
          color: "#5470c6",
          img: require("@/assets/img/h5/statistics/order_count.png"),
        },
        {
          label: "订单金额",
          key: "order_price",
          color: "#91cc75",
          img: require("@/assets/img/h5/statistics/order_price.png"),
        },
      ],
      canvasSeries: [],
      currentConfig: [],
    };
  },
  methods: {
    renderEcharts(arr) {
      if (this.active === 1) {
        this.renderEchartsAction(arr, this.callStatisticsBox);
      } else if (this.active === 2) {
        this.renderEchartsAction(arr, this.customerStatisticsBox);
      } else if (this.active === 3) {
        this.renderEchartsAction(arr, this.orderStatisticsBox);
      }
    },
    renderEchartsAction(arr, config) {
      this.currentConfig = config
      let result = [];
      config.forEach((item) => {
        let box = arr.map((val) => val[item.key]);
        result.push({
          name: item.label,
          data: box,
          type: "line",
          itemStyle: {
            color: item.color,
          },
        });
      });

      this.canvasSeries = result;
      console.log("canvasSeries: ", canvasSeries);
    },
  },
};
