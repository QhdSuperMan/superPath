/*
 * @Description: 
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2022-11-22 23:31:43
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-01-31 20:01:58
 */

import filter from '@/utils/filter.js'
export const tableMinxin = {
  data() {
    return {};
  },
  methods: {
    dealColumns(columns) {
      let result = [];
      columns.map((val, index) => {
        let obj = Object.assign(
          {
            align: "center",
            key: val.dataIndex,
            ellipsis: true,
          },
          val
        );

        if (val.customFilter) {
          obj.customRender = function (value) {
            return filter[val.customFilter](value);
          }.bind(this)
        }
        // if (index === 0) {
        //   obj.customCell =
        //     obj.customCell ||
        //     (() => {
        //       return {
        //         style: {
        //           "text-align": "left",
        //         },
        //       };
        //     });
        // }
        if (!obj.hidden || (typeof obj.hidden == "function" && !obj.hidden())) {
          result.push(obj);
        }
      });

      return result;
    },
  },
};
