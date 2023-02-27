// 拨号状态

import addImg from "@/assets/img/resources/add.png";
import release from "@/assets/img/resources/release.png";

export const formModal = {
  keyword: "",
  resource_status: 0,
  receive_way: 0,
};

const resource_status = [
  {
    label: "不限",
    value: 0,
  },
  {
    label: "已拨打",
    value: 1,
  },
  {
    label: "未拨打",
    value: 2,
  },
  {
    label: "需重拨",
    value: 3,
  },
];
// 领取状态
const receive_way = [
  {
    label: "不限",
    value: 0,
  },
  {
    label: "自主添加",
    value: 1,
  },
  {
    label: "自主领取",
    value: 2,
  },
  {
    label: "上级派发",
    value: 3,
  },
];

export const configMixins = {
  data() {
    return {
      formItem: [
        {
          field: "mobile",
          label: "派发日期",
          type: "a-date-picker",
          attrs: {
            size: "large",
            valueFormat: "YYYY-MM-DD",
            placeholder: "请选择派发日期",
          },
          // events: {
          //   change: function () {
          //     console.log(this.form);
          //   }.bind(this),
          // },
        },
        {
          field: "resource_status",
          type: "CustomSelect",
          label: "资源状态",
          attrs: {
            allKey: false,
            options: resource_status,
          },
        },
        {
          field: "search",
          slot: "code",
        },
      ],
      columns: [
        {
          title: "类型",
          dataIndex: "contact_company",
          width: 100,
          customRender: function (value) {
            return "消费";
          }.bind(this),
        },
        {
          title: "金额",
          dataIndex: "contact_mobile",
          width: 200,
          customFilter: 'money'
        },
        // {
        //   title: "拨号",
        //   dataIndex: "resource_status",
        //   width: 100,
        // },
        // {
        //   title: "来源",
        //   dataIndex: "resource_status_name",
        //   width: 100,
        // },
        {
          title: "支付方式",
          dataIndex: "department_name",
          width: 100,
          // customRender: function (value) {
          //   return "dsdsd";
          // }.bind(this),
        },
        {
          title: "账户余额",
          dataIndex: "department_name1",
          width: 200,
          customFilter: 'money'
        },

        {
          title: "备注",
          dataIndex: "remark",
        },
        {
          title: "时间",
          dataIndex: "department_name2",
          width: 100,
        },
        // {
        //   title: "操作",
        //   dataIndex: "操作",
        //   width: 100,
        //   customRender: function (value, row) {
        //     return {
        //       children: [
        //         <img
        //           width="20px"
        //           style="margin-right: 14px; cursor: pointer;"
        //           src={addImg}
        //           onClick={() => {
        //             this.currentRow = row;
        //             this.isShowAddCustomer = true;
        //           }}
        //           alt=""
        //         />,
        //         <img
        //           width="20px"
        //           style="cursor: pointer;"
        //           src={release}
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
