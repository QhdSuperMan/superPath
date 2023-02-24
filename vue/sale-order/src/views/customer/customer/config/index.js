// 拨号状态
import {
  receive,
  release,
  releaseAll,
  deleteCustomer,
  recovery,
  putRecycle,
  transfer,
  dispatch,
} from "@/api/customer/customer.js";

export const formModal = {
  keyword: "",
  date_range: 0, // 日期范围
  customer_status: 0, // 客户状态
};

const date_range = [
  {
    label: "不限",
    value: 0,
  },
  {
    label: "今天",
    value: 1,
  },
  {
    label: "三天",
    value: 2,
  },
  {
    label: "七天",
    value: 3,
  },
];

const customer_status = [
  {
    label: "不限",
    value: 0,
  },
  {
    label: "初访",
    value: 1,
  },
  {
    label: "意向",
    value: 2,
  },
  {
    label: "报价",
    value: 3,
  },
  {
    label: "成交",
    value: 4,
  },
];

const customerType = [
  {
    label: "A类",
    value: 1,
  },
  {
    label: "B类",
    value: 2,
  },
  {
    label: "C类",
    value: 3,
  },
  {
    label: "D类",
    value: 4,
  },
];

export const configMixins = {
  data() {
    return {
      formItem: [
        {
          field: "date_range",
          label: "日期范围",
          type: "CustomSelect",
          attrs: {
            allKey: false,
            options: date_range,
          },
          // events: {
          //   change: function () {
          //     console.log(this.form);
          //   }.bind(this),
          // },
        },
        {
          field: "customer_status",
          type: "CustomSelect",
          label: "客户状态",
          attrs: {
            allKey: false,
            options: customer_status,
          },
        },
        {
          field: "search",
          slot: "code",
        },
      ],
    };
  },
  computed: {
    columns() {
      // type 1 我的 2 全部 3回收站 4公海
      return [
        {
          title: "公司名称",
          dataIndex: "contact_company",
          width: 120,
        },
        {
          title: "客户名称",
          dataIndex: "contact_name",
          width: 100,
        },
        {
          title: "电话",
          dataIndex: "contact_mobile",
          width: 130,
        },
        {
          title: "客户状态",
          dataIndex: "customer_status_name",
          width: 100,
        },
        {
          title: "客户类型",
          dataIndex: "customer_type",
          width: 100,

          customRender: function (value, row) {
            let result = customerType.find((val) => val.value === value);
            return result && result.label;
          },
        },
        {
          title: "领取方式",
          dataIndex: "receive_way_name",
          width: 100,
        },
        {
          title: "通话次数",
          dataIndex: "call_count",
          width: 150,
          customRender: function (value, row) {
            return {
              children: [
                <CustomButton
                  type="primary"
                  size="small"
                  onClick={() => {
                    this.currentRow = row;
                    this.isShowCallDetail = true;
                  }}
                >
                  {value}
                </CustomButton>,
              ],
              attrs: {
                colSpan: 1,
                rowSpan: 1,
              },
            };
          }.bind(this),
        },
        {
          title: "回收时间",
          dataIndex: "recycle_time_name",
          width: 170,
          hidden: function () {
            return this.currentPage !== "RecyclingBin";
          }.bind(this),
        },
        {
          title: "跟进时间",
          dataIndex: "follow_time_name",
          width: 170,
        },
        {
          title: "跟进内容",
          dataIndex: "follow_content",
        },
        {
          title: "操作",
          dataIndex: "操作",
          width: 200,
          fixed: "right",
          customRender: function (value, row) {
            return {
              children: [
                this.type == 1 ? (
                  <CustomButton
                    type="link"
                    icon="edit"
                    size="small"
                    disabled={ !this.btnAuthority.s_edit }
                    onClick={() => this.edit(row)}
                  >
                    编辑
                  </CustomButton>
                ) : (
                  ""
                ),
                <CustomButton
                  type="link"
                  size="small"
                  onClick={() => {
                    this.currentRow = row;
                    this.isShowAddContent = true;
                  }}
                >
                  添加跟进记录
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
    // 导出
    exportFile() {
      exportTemplate();
    },
    // 编辑
    edit(row) {
      this.currentRow = row;
      this.isShowAddCustomer = true;
    },
    // 转交
    submit(id, clear) {
      let request = transfer;
      if (this.type === 7) {
        request = dispatch;
      }
      let vm = this;
      request({
        staff_id: id,
        customer_id: vm.selectedRowKeys.join(","),
      })
        .then(({ data }) => {
          if (data.code === 200) {
            vm.$message.success(data.msg);
            vm.isShowSelectEmployee = true;
            vm.search();
          }
          clear();
        })
        .catch(() => clear());
    },
    // 领取客户
    receiveCustomer() {
      let vm = this;
      this.$confirm({
        content: "确认领取?",
        cancelText: "取消",
        okText: "确认",
        onOk() {
          receive({
            customer_id: vm.selectedRowKeys.join(","),
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
    // 释放全部客户
    releaseAllCustomer() {
      let vm = this;
      this.$confirm({
        content: "确认释放全部客户?",
        cancelText: "取消",
        okText: "确认",
        onOk() {
          releaseAll().then(({ data }) => {
            if (data.code === 200) {
              vm.$message.success(data.msg);
              vm.search();
            }
          });
        },
        onCancel() {},
      });
    },
    // 释放客户
    releaseCustomer() {
      let vm = this;
      this.$confirm({
        content: "确认释放?",
        cancelText: "取消",
        okText: "确认",
        onOk() {
          release({
            customer_id: vm.selectedRowKeys.join(","),
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
    // 删除客户
    deleteCustomer() {
      let vm = this;
      this.$confirm({
        content: "确认删除?",
        cancelText: "取消",
        okText: "确认",
        onOk() {
          deleteCustomer({
            customer_id: vm.selectedRowKeys.join(","),
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
    // 恢复
    recoveryCustomer() {
      let vm = this;
      this.$confirm({
        content: "确认恢复?",
        cancelText: "取消",
        okText: "确认",
        onOk() {
          recovery({
            customer_id: vm.selectedRowKeys.join(","),
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
    // 加入回收站
    putRecycleCustomer() {
      let vm = this;
      this.$confirm({
        content: "确认加入回收站?",
        cancelText: "取消",
        okText: "确认",
        onOk() {
          putRecycle({
            customer_id: vm.selectedRowKeys.join(","),
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
