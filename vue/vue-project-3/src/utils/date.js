/*
 * @Description:
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2023-01-29 21:43:58
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-01-29 22:01:19
 */
/**
 * 获取日期维度
 * @param {*} type
 * @returns
 */
export const getDateRange = (type = "week") => {
  if (type == "week") {
    return ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];
  } else if (type === "month") {
    let days = getMonthDay(new Date().getFullYear(), new Date().getMonth());
    return new Array(days).fill("").map((val, index) => index + 1 + "号");
  } else {
    return [
      "1月",
      "2月",
      "3月",
      "4月",
      "5月",
      "6月",
      "7月",
      "8月",
      "9月",
      "10月",
      "11月",
      "12月",
    ];
  }
};
/**
 * 获取月有多少天
 * @param {*} year
 * @param {*} month
 * @returns
 */
function getMonthDay(year, month) {
  let days = new Date(year, month + 1, 0).getDate();
  return days;
}
