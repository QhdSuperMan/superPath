// 拨号状态
import {
  auditorPass,
  auditorNoPass,
  reject,
  auditorInvalid,
  deleteOrder,
} from "@/api/order/order.js";

export const formModal = {
  keyword: "",
  add_start_time: "",
  add_end_time: "",
  dateRange: [],
  auditor_status: "", // 审核状态
};

const auditor_status = [
  {
    label: "未审核",
    value: 1,
  },
  {
    label: "已审核",
    value: 2,
  },
  {
    label: "驳回",
    value: 3,
  },
  // {
  //   label: "作废",
  //   value: 3,
  // },
];

export const configMixins = {
  data() {
    return {
      formItem: [
        {
          field: "dateRange",
          label: "日期范围",
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
          field: "auditor_status",
          type: "CustomSelect",
          label: "审核状态",
          attrs: {
            options: auditor_status,
          },
        },
        {
          field: "search",
          slot: "code",
        },
      ],
      rejectMsg: "",
    };
  },
  computed: {
    columns() {
      return [
        {
          title: "订单号",
          dataIndex: "order_sn",
          width: 200,
        },
        {
          title: "订单金额",
          dataIndex: "order_price",
          width: 100,
        },
        {
          title: "部门名称",
          dataIndex: "department_name",
          width: 100,
          hidden: this.type === 1,
        },
        {
          title: "员工名称",
          dataIndex: "staff_name",
          width: 120,
          hidden: this.type === 1,
        },
        {
          title: "审核状态",
          dataIndex: "auditor_status_name",
          width: 130,
        },
        {
          title: "添加时间",
          dataIndex: "add_time_name",
          width: 170,
        },
        {
          title: "审核人名称",
          dataIndex: "auditor_name",
          width: 170,
        },
        {
          title: "审核时间",
          dataIndex: "auditor_time_name",
          width: 170,
        },
        {
          title: "拒绝原因",
          dataIndex: "refuse_reason",
        },
        {
          title: "操作",
          dataIndex: "操作",
          width: 100,
          fixed: "right",
          hidden: this.type === 2,
          customRender: function (value, row) {
            return {
              children: [
                <CustomButton
                  type="link"
                  icon="edit"
                  size="small"
                  disabled={!this.btnAuthority.s_edit}
                  onClick={() => this.edit(row)}
                >
                  编辑
                </CustomButton>,
              ],
              attrs: {
                colSpan: 1,
                rowSpan: 1,
              },
            };
          }.bind(this),
        },
      ];
    },
  },
  methods: {
    auditorPass() {
      let vm = this;
      this.$confirm({
        content: "确认审核?",
        cancelText: "取消",
        okText: "确认",
        onOk() {
          auditorPass({
            order_id: vm.selectedRowKeys.join(","),
          }).then(({ data }) => {
            if (data.code === 200) {
              vm.$message.success(data.msg);
              vm.search();
            }
          });
        },
        onCancel() {},
      });
    },
    auditorNoPass() {
      let vm = this;
      this.$confirm({
        content: "确认弃审?",
        cancelText: "取消",
        okText: "确认",
        onOk() {
          auditorNoPass({
            order_id: vm.selectedRowKeys.join(","),
          }).then(({ data }) => {
            if (data.code === 200) {
              vm.$message.success(data.msg);
              vm.search();
            }
          });
        },
        onCancel() {},
      });
    },
    reject() {
      let vm = this;
      this.$confirm({
        title: "确认驳回?",
        cancelText: "取消",
        okText: "确认",
        content: () => (
          <a-textarea
            rows={5}
            placeholder="请填写驳回原因"
            onchange={(e) => {
              this.rejectMsg = e.target.value;
            }}
          ></a-textarea>
        ),
        onOk(close) {
          if (!vm.rejectMsg) {
            vm.$message.warning("请输入驳回原因");
            return false;
          }
          reject({
            order_id: vm.selectedRowKeys.join(","),
          }).then(({ data }) => {
            if (data.code === 200) {
              vm.$message.success(data.msg);
              vm.search();
              close();
            }
          });
        },
        onCancel() {},
      });
    },
    auditorInvalid() {
      let vm = this;
      this.$confirm({
        content: "确认作废?",
        cancelText: "取消",
        okText: "确认",
        onOk() {
          auditorInvalid({
            order_id: vm.selectedRowKeys.join(","),
          }).then(({ data }) => {
            if (data.code === 200) {
              vm.$message.success(data.msg);
              vm.search();
            }
          });
        },
        onCancel() {},
      });
    },
    deleteOrder() {
      let vm = this;
      this.$confirm({
        content: "确认删除?",
        cancelText: "取消",
        okText: "确认",
        onOk() {
          deleteOrder({
            order_id: vm.selectedRowKeys.join(","),
          }).then(({ data }) => {
            if (data.code === 200) {
              vm.$message.success(data.msg);
              vm.search();
            }
          });
        },
        onCancel() {},
      });
    },
  },
};
