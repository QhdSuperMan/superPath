// 拨号状态

import addImg from "@/assets/img/resources/add.png";
import releaseUrl from "@/assets/img/resources/release.png";
import {
  deleteResource,
  putRecycle,
  recovery,
  release,
  releaseAll,
} from "@/api/resource/resource.js";

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
          field: "mobile1",
          label: "拨打时间",
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
          field: "receive_way",
          type: "CustomSelect",
          label: "领取方式",
          attrs: {
            allKey: false,
            options: receive_way,
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
          width: 100,
        },
        {
          title: "联系人",
          dataIndex: "contact_name",
          width: 100,
        },
        {
          title: "联系电话",
          dataIndex: "contact_mobile",
          width: 100,
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
          title: "派发时间",
          dataIndex: "receive_time_name",
          width: 100,
        },
        {
          title: "拨打情况",
          dataIndex: "resource_status_name",
          width: 100,
        },
        {
          title: "领取方式",
          dataIndex: "receive_way_name",
          width: 100,
        },
        {
          title: "所属员工",
          dataIndex: "staff_name",
          width: 100,
          hidden: this.type === 1,
        },
        {
          title: "所属部门",
          dataIndex: "department_name",
          width: 100,
          customRender: function (value) {
            return "dsdsd";
          }.bind(this),
          hidden: this.type === 1,
        },
        {
          title: "操作",
          dataIndex: "操作",
          width: 120,
          customRender: function (value, row) {
            return {
              children: [
                this.type === 1 ? (
                  <CustomButton
                    type="link"
                    icon="edit"
                    size="small"
                    disabled={!this.btnAuthority.s_add_client}
                    onClick={() => {
                      this.currentRow = row;
                      this.isShowAddCustomer = true;
                    }}
                  >
                    添加为客户
                  </CustomButton>
                ) : (
                  ""
                ),
                <CustomButton
                  type="link"
                  icon="edit"
                  size="small"
                  disabled={!this.btnAuthority.s_info}
                  onClick={() => {
                    this.currentRow = row;
                    this.isShowResourceDetails = true;
                  }}
                >
                  资源详情
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
    release() {
      let vm = this;
      this.$confirm({
        content: "确认释放资源?",
        cancelText: "取消",
        okText: "确认",
        onOk() {
          release({
            resource_id: vm.selectedRowKeys.join(","),
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
    releaseAll() {
      let vm = this;
      this.$confirm({
        content: "确认释放全部资源?",
        cancelText: "取消",
        okText: "确认",
        onOk() {
          releaseAll({
            resource_id: vm.selectedRowKeys.join(","),
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
    deleteFile() {
      let vm = this;
      this.$confirm({
        content: "确认删除资源?",
        cancelText: "取消",
        okText: "确认",
        onOk() {
          deleteResource({
            resource_id: vm.selectedRowKeys.join(","),
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
    recovery() {
      let vm = this;
      this.$confirm({
        content: "确认恢复资源?",
        cancelText: "取消",
        okText: "确认",
        onOk() {
          recovery({
            resource_id: vm.selectedRowKeys.join(","),
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
    addRecycleBin() {
      let vm = this;
      this.$confirm({
        content: "确认加入回收站?",
        cancelText: "取消",
        okText: "确认",
        onOk() {
          putRecycle({
            resource_id: vm.selectedRowKeys.join(","),
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
