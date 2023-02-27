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
          title: "员工名称",
          dataIndex: "staff_name",
          width: 120,
        },
        {
          title: "手机号",
          dataIndex: "mobile",
          width: 120,
        },
        // {
        //   title: "是否超管",
        //   dataIndex: "is_admin",
        //   width: 100,
        //   customRender: function (value, row) {
        //     return row.is_admin == 1 ? "是" : "否";
        //   },
        // },
        // {
        //   title: "是否部门管理员",
        //   dataIndex: "is_dep_admin",
        //   width: 150,
        //   customRender: function (value, row) {
        //     return row.is_dep_admin == 1 ? "是" : "否";
        //   },
        // },
        {
          title: "所属角色",
          dataIndex: "role_name",
          width: 120,
        },
        {
          title: "所属部门",
          dataIndex: "department_name",
          width: 120,
        },
        {
          title: "添加时间",
          dataIndex: "add_time_name",
          width: 170,
        },
        // {
        //   title: "是否开启录音",
        //   dataIndex: "is_tape",
        //   width: 150,
        //   customRender: function (value, row) {
        //     return row.is_tape == 1 ? "是" : "否";
        //   },
        // },
        // {
        //   title: "是否停用",
        //   dataIndex: "is_pause",
        //   width: 150,
        //   customRender: function (value, row) {
        //     return row.is_pause == 0 ? "否" : "是";
        //   },
        // },
        {
          title: "操作",
          dataIndex: "操作",
          width: 150,
          customRender: function (value, row) {
            return {
              children: [
                <CustomButton
                  type="link"
                  icon="edit"
                  size="small"
                  disabled={ !this.btnAuthority.s_edit }
                  onClick={() => this.edit(row)}
                >
                  编辑
                </CustomButton>,
                <a-switch
                  checked={row.is_pause == 0}
                  checked-children="启用"
                  un-checked-children="停用"
                  disabled={ !this.btnAuthority.s_start_stop }
                  onClick={() => this.switch(row)}
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
