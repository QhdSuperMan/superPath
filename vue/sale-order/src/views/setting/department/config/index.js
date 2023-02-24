// 拨号状态

import release from "@/assets/img/resources/release.png";

export const formModal = {};

export const configMixins = {
  data() {
    return {
      formItem: [
        // {
        //   field: "date_range",
        //   label: "日期范围",
        //   type: "CustomSelect",
        //   attrs: {
        //     allKey: false,
        //     options: date_range,
        //   },
        //   // events: {
        //   //   change: function () {
        //   //     console.log(this.form);
        //   //   }.bind(this),
        //   // },
        // },
        // {
        //   field: "customer_status",
        //   type: "CustomSelect",
        //   label: "客户状态",
        //   attrs: {
        //     allKey: false,
        //     options: customer_status,
        //   },
        // },
        {
          field: "search",
          slot: "code",
        },
      ],
      columns: [
        {
          title: "部门名称",
          dataIndex: "department_name",
          width: 120,
        },
        {
          title: "员工数量",
          dataIndex: "staff_total",
          customRender: function (value, row) {
            return {
              children: [
                <CustomButton
                  type="link"
                  size="small"
                  onClick={() => {
                    this.currentRow = row;
                    this.isShowStaffList = true;
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
          width: 170,
        },
        {
          title: "操作",
          dataIndex: "操作",
          width: 100,
          customRender: function (value, row) {
            return {
              children: [
                <CustomButton
                  type="link"
                  size="small"
                  disabled={ !this.btnAuthority.s_edit }
                  onClick={() => this.edit(row)}
                >
                  编辑
                </CustomButton>,
                <CustomButton
                  type="link"
                  size="small"
                  disabled={ !this.btnAuthority.s_delete }
                  onClick={() => this.deleteDepartment(row)}
                >
                  删除
                </CustomButton>,
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
