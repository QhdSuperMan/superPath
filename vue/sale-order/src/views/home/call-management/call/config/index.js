// 拨号状态

import deleteImg from "@/assets/img/call/delete.png";
import detail from "@/assets/img/call/detail.png";

export const formModal = {
  keyword: "",
  date_range: 0, // 日期范围
  customer_status: 0, // 客户状态
};

const customer_status = [
  {
    label: "不限",
    value: 0,
  },
  {
    label: "是",
    value: 1,
  },
  {
    label: "否",
    value: 2,
  },
];

export const configMixins = {
  data() {
    return {
      formItem: [
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
                this.form.add_start_time = value[0];
                this.form.add_end_time = value[1];
              } else {
                this.form.add_start_time = "";
                this.form.add_end_time = "";
              }
            }.bind(this),
          },
        },
        {
          field: "customer_status",
          type: "CustomSelect",
          label: "是否接通",
          attrs: {
            allKey: false,
            options: customer_status,
          },
        },
        {
          field: "customer_status",
          type: "CustomSelect",
          label: "通话时长",
          attrs: {
            allKey: false,
            options: customer_status,
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
          field: "search",
          slot: "code",
        },
      ],
      columns: [
        {
          title: "联系电话",
          dataIndex: "contact_company",
          width: 120,
        },
        {
          title: "联系人",
          dataIndex: "contact_name",
          width: 100,
        },
        {
          title: "通话次数",
          dataIndex: "contact_mobile",
          width: 130,
        },
        {
          title: "拨号",
          dataIndex: "customer_status_name",
          width: 100,
        },
        {
          title: "手机归属地",
          dataIndex: "receive_way_name",
          width: 100,
        },
        {
          title: "通话日期",
          dataIndex: "add_time_name",
          width: 120,
        },
        {
          title: "开始时间",
          dataIndex: "recycle_time_name",
          width: 170,
        },
        {
          title: "结束时间",
          dataIndex: "follow_time_name",
          width: 170,
        },
        {
          title: "通话时长",
          dataIndex: "follow_content",
        },
        {
          title: "所属员工",
          dataIndex: "follow_content1",
        },
        {
          title: "操作",
          dataIndex: "操作",
          width: 200,
          fixed: "right",
          customRender: function (value, row) {
            return {
              children: [
                <img
                  width="20px"
                  style="margin-right: 14px; cursor: pointer;"
                  src={deleteImg}
                  onClick={() => {
                    this.currentRow = row;
                    this.isShowAddCustomer = true;
                  }}
                  alt=""
                />,
                <img
                  width="20px"
                  style="cursor: pointer;"
                  src={detail}
                  onClick={() => {
                    this.currentRow = row;
                    this.isShowResourceDetails = true;
                  }}
                  alt=""
                />,
              ],
              attrs: {
                colSpan: 1,
                rowSpan: 1,
              },
            };
          }.bind(this),
        },
      ],
    };
  },
};
