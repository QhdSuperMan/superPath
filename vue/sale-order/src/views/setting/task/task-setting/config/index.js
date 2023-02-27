// 表格校验规则
export const tableRules = {
  target: ["required", "integer"],
  sort: ["required", "integer"],
};

export const configMixins = {
  data() {
    return {
      columns: [
        {
          title: "任务名称",
          dataIndex: "task_name",
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
        {
          title: "排序",
          dataIndex: "sort",
          width: 100,
          customRender: function (value, row) {
            return {
              children: [
                <CustomInput
                  value={value}
                  onInput={(val) => (row.sort = val)}
                ></CustomInput>,
              ],
              attrs: {
                colSpan: 1,
                rowSpan: 1,
              },
            };
          }.bind(this),
        },
        {
          title: "启用",
          dataIndex: "启用",
          width: 100,
          customRender: function (value, row) {
            return {
              children: [
                <a-switch
                  checked={row.is_enable == 1}
                  checked-children="启用"
                  disabled={ !this.btnAuthority.s_start_stop }
                  un-checked-children="停用"
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
