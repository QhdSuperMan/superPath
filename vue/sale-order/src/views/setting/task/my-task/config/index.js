/*
 * @Description: 
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2023-01-05 22:19:30
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-02-05 19:21:34
 */
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
          width: 200,
        },
        {
          title: "任务目标",
          dataIndex: "task_title",
        },
        {
          title: "完成情况",
          dataIndex: "done_num",
          width: 100,
          customRender: function (value, row) {
            return value + row.unit;
          }.bind(this),
        },
        {
          title: "任务进展图",
          dataIndex: "done_ratio",
          width: 200,
          customRender: function (value, row) {
            return {
              children: [<a-progress percent={value} />],
              attrs: {
                colSpan: 1,
                rowSpan: 1,
              },
            };
          }.bind(this),
        },
        {
          title: "是否完成",
          dataIndex: "aaa",
          width: 100,
          customRender: function (value, row) {
            return {
              children: [
                <span
                  class={
                    row.done_ratio === 100
                      ? "common-text-blue"
                      : "common-text-red"
                  }
                >
                  {row.done_ratio === 100 ? "完成" : "未完成"}
                </span>,
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
