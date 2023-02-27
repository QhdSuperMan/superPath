// 拨号状态

export const formModal = {
  callee_number: "", // 被叫号码
  dateRange: [], // 日期范围
  customer_status: 0, // 客户状态
  is_connect: "",
};

export const configMixins = {
  data() {
    return {
      columns: [
        {
          title: "序号",
          dataIndex: "contact_company",
          width: 60,
          customCell: () => {},
          customRender: function (value, row, index) {
            return index + 1;
          },
        },
        {
          title: "通话开始时间",
          dataIndex: "call_start_time",
          width: 170,
        },
        {
          title: "通话结束时间",
          dataIndex: "call_end_time",
          width: 170,
        },
        {
          title: "通话时长",
          dataIndex: "call_duration",
          width: 90,
        },
        {
          title: "录音地址",
          dataIndex: "record_url",
          customRender: function (value, row) {
            return {
              children: [
                value ? (
                  <audio controls>
                    <source src={value} type="audio/ogg"></source>
                    <source src={value} type="audio/mpeg">
                      您的浏览器不支持 audio 元素。
                    </source>
                  </audio>
                ) : (
                  ""
                ),
              ],
              attrs: {
                colSpan: 1,
                rowSpan: 1,
              },
            };
          }.bind(this),
        },
        // {
        //   title: "操作",
        //   dataIndex: "操作",
        //   width: 200,
        //   fixed: "right",
        //   customRender: function (value, row) {
        //     return {
        //       children: [
        //         <img
        //           width="20px"
        //           style="margin-right: 14px; cursor: pointer;"
        //           src={deleteImg}
        //           onClick={() => {
        //             this.currentRow = row;
        //             this.isShowAddCustomer = true;
        //           }}
        //           alt=""
        //         />,
        //         <img
        //           width="20px"
        //           style="cursor: pointer;"
        //           src={detail}
        //           onClick={() => {
        //             this.currentRow = row;
        //             this.isShowResourceDetails = true;
        //           }}
        //           alt=""
        //         />,
        //       ],
        //       attrs: {
        //         colSpan: 1,
        //         rowSpan: 1,
        //       },
        //     };
        //   }.bind(this),
        // },
      ],
    };
  },
};
