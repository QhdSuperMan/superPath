/*
 * @Description:
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2023-01-29 20:56:42
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-02-05 19:10:32
 */
// 表格校验规则
export const tableRules = {
  target: ["required", "integer"],
};

export const formModal = {
  keyword: "",
  is_bind: "",
  is_expire: "",
  key_type: 1,
};

const is_bind = [
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

const is_expire = [
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

export const searchType = [
  {
    label: "员工",
    value: 1,
  },
  {
    label: "坐席编号",
    value: 2,
  },
];

export const configMixins = {
  data() {
    return {
      formItem: [
        {
          field: "is_bind",
          type: "CustomSelect",
          label: "是否绑定",
          attrs: {
            allKey: false,
            options: is_bind,
          },
        },
        {
          field: "is_expire",
          type: "CustomSelect",
          label: "是否过期",
          attrs: {
            allKey: false,
            options: is_expire,
          },
        },
        {
          field: "search",
          slot: "code",
        },
      ],
      columns: [
        {
          title: "坐席编号",
          dataIndex: "seat_number",
          width: 100,
        },
        {
          title: "绑定员工",
          dataIndex: "staff_name",
          width: 100,
        },
        {
          title: "是否暂停",
          dataIndex: "is_pause",
          width: 100,
          customRender(val) {
            return val == 0 ? "未暂停" : "暂停";
          },
        },
        {
          title: "开通时间",
          dataIndex: "start_time_name",
          width: 170,
        },
        {
          title: "到期时间",
          dataIndex: "end_time_name",
          width: 170,
        },
        {
          title: "启用",
          dataIndex: "启用",
          width: 100,
          customRender: function (value, row) {
            return {
              children: [
                row.staff_id !== 0 ? (
                  <CustomButton
                    type="link"
                    size="small"
                    disabled={ !this.btnAuthority.s_change }
                    onClick={() => {
                      this.currentRow = row;
                      this.isShowBinding = true;
                    }}
                  >
                    变更
                  </CustomButton>
                ) : (
                  ""
                ),
                <CustomButton
                  type="link"
                  size="small"
                  disabled={ (!this.btnAuthority.s_bind && row.staff_id == 0) || (!this.btnAuthority.s_unbind && row.staff_id !== 0)}
                  onClick={() => {
                    if (row.staff_id == 0) {
                      this.currentRow = row;
                      this.isShowBinding = true;
                    } else {
                      this.unbindSite(row);
                    }
                  }}
                >
                  {row.staff_id !== 0 ? "解绑" : "绑定"}
                </CustomButton>,
                <CustomButton
                  type="link"
                  disabled={ !this.btnAuthority.s_view_log }
                  size="small"
                  onClick={() => {
                    this.currentRow = row;
                    this.isShowLogOperation = true;
                  }}
                >
                  日志
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
