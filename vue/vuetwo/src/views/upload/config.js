/*
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2022-02-08 16:03:12
 * @LastEditTime: 2022-02-08 16:03:13
 * @info: 描述
 */
export const request = function ({
  url,
  method = "post",
  data,
  headers = {},
  requestList
}) {
  return new Promise(resolve => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    Object.keys(headers).forEach(key =>
      xhr.setRequestHeader(key, headers[key])
    );
    xhr.send(data);
    xhr.onload = e => {
      resolve({
        data: e.target.response
      });
    };
  });
}
