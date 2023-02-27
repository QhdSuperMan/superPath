/*
 * @Description:
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2022-12-18 14:25:07
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-01-29 20:55:05
 */
export const formModal = {
  keyword: "",
  department_id: "",
};

export const configMixins = {
  data() {
    return {
      formItem: [
        {
          field: "keyword",
          type: "a-input-search",
          attrs: {
            valueFormat: "YYYY-MM-DD",
            placeholder: "搜索员工姓名、手机号",
          },
          events: {
            search: this.search,
          },
        },
        {
          label: "部门",
          field: "department_id",
          type: "customSelect",
          attrs: {
            allKey: false,
            api: "getDepartmentList",
            config: { value: "department_id", label: "department_name" },
          },
        },
        {
          field: "search",
          slot: "code",
        },
      ],
    };
  },
};
