// 拨号状态
export const formModal = {
  callee_number: "", // 被叫号码
  dateRange: [], // 日期范围
  customer_status: 0, // 客户状态
  is_connect: "",
};

const is_connect = [
  {
    label: "不限",
    value: "",
  },
  {
    label: "否",
    value: 0,
  },
  {
    label: "是",
    value: 1,
  },
];

export const configMixins = {
  data() {
    return {
      formItem: [
        {
          field: "is_connect",
          type: "CustomSelect",
          label: "是否接通",
          attrs: {
            allKey: false,
            options: is_connect,
          },
        },
        {
          field: "staff_id",
          type: "CustomSelect",
          label: "所属员工",
          attrs: {
            allKey: false,
            api: "getStaffList",
            config: { value: "staff_id", label: "staff_name" },
          },
        },
        {
          field: "dateRange",
          label: "通话日期",
          type: "a-range-picker",
          itemAttrs: {
            class: "big-form-item",
          },
          attrs: {
            valueFormat: "YYYY-MM-DD",
            size: "small",
            placeholder: ["开始时间", "结束时间"],
          },
          events: {
            change: function (value) {
              if (Array.isArray(value)) {
                this.form.call_start_time = value[0];
                this.form.call_end_time = value[1];
              } else {
                this.form.call_start_time = "";
                this.form.call_end_time = "";
              }
            }.bind(this),
          },
        },
        {
          field: "search",
          slot: "code",
        },
      ],
      columns: [
        // {
        //   title: "序号",
        //   dataIndex: "contact_company",
        //   // customCell: () => {
        //   //   return {
        //   //     style: {
        //   //       "text-align": "right",
        //   //     },
        //   //   };
        //   // },
        //   width: 120,
        //   customRender: function (value, row, index) {
        //     return index + 1;
        //   },
        // },
        {
          title: "被叫号码",
          dataIndex: "callee_number",
          width: 150,
        },
        {
          title: "通话次数",
          dataIndex: "call_count",
          width: 150,
          customRender: function (value, row) {
            return {
              children: [<CustomButton type="primary" size="small" onClick={() => {
                this.currentRow = row
                this.isShowDetails = true
              }}>{value}</CustomButton>],
              attrs: {
                colSpan: 1,
                rowSpan: 1,
              },
            };
          }.bind(this),
        },
        {
          title: "手机号归属地",
          dataIndex: "mobile_address",
          width: 170,
        },
        {
          title: "部门名称",
          dataIndex: "department_name",
          width: 100,
          hidden: function () {
            return this.type === 2; // 我的通话隐藏
          }.bind(this),
        },
        {
          title: "员工名称",
          dataIndex: "staff_name",
          width: 100,
          hidden: function () {
            return this.type === 2; // 我的通话隐藏
          }.bind(this),
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
