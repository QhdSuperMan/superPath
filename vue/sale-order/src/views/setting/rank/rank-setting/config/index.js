/*
 * @Description:
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2023-01-29 20:56:42
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-01-29 21:01:41
 */
// 表格校验规则
export const tableRules = {
  target: ["required", "integer"],
};

export const configMixins = {
  data() {
    return {
      columns: [
        {
          title: "员工名称",
          dataIndex: "staff_name",
          width: 100,
        },
        {
          title: "部门名称",
          dataIndex: "department_name",
          width: 100,
        },
        {
          title: "任务目标",
          dataIndex: "target",
          width: 100,
          customRender: function (value, row) {
            return {
              children: [
                <CustomInput
                  value={value}
                  onInput={(val) => (row.target = val)}
                >
                  <span slot="suffix">{row.unit}</span>
                </CustomInput>,
              ],
              attrs: {
                colSpan: 1,
                rowSpan: 1,
              },
            };
          }.bind(this),
        },
        // {
        //   title: "启用",
        //   dataIndex: "启用",
        //   width: 100,
        //   customRender: function (value, row) {
        //     return {
        //       children: [
        //         <a-switch
        //           checked={row.is_enable == 1}
        //           checked-children="启用"
        //           un-checked-children="禁用"
        //           onClick={() => this.switch(row)}
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
