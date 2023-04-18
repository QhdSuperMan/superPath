/*
 * @Description:
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2022-11-27 14:39:45
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-04-12 09:46:16
 */
import router from "@/router/index.js";
// import store from "@/store/index.js";

// // 跳到登录页面
// export function jumpLogin(isBack = true) {
//   if (router.app._route.path === "/Login") return;
//   if (isBack) {
//     router.push({
//       path: "/Login",
//       query: {
//         backRoute: router.app._route.fullPath,
//       },
//     });
//   } else {
//     router.push("/Login");
//   }
// }

// 获取URl参数
export function getUrlQuery(key: string): string | Boolean {
  let query = window.location.href.split("?")[1];
  if (query) {
    let vars = query.split("&");
    for (let i = 0; i < vars.length; i++) {
      let pair = vars[i].split("=");
      if (pair[0] == key) {
        return pair[1];
      }
    }
  }
  return false;
}

// 格式化对象 删除 undefined null '' 的属性
export function formatterObj(obj: any) {
  if (isArray(obj) || isObject(obj)) {
    for (const key in obj) {
      if (isArray(obj[key]) || isObject(obj[key])) {
        formatterObj(obj[key]);
      } else if (
        obj[key] === undefined ||
        obj[key] === null ||
        obj[key] === ""
      ) {
        delete obj[key];
      }
    }
  }
}
// 退出登录
export function logout() {
  // store.dispatch("Logout");
  // jumpLogin();
}

// 跳转到原先的地址
export function jumpBackPage(path: string) {
  let route = getUrlQuery("backRoute");
  let page = getUrlQuery("backPage");
  if (route) {
    router.push(decodeURIComponent(route as string));
  } else if (page) {
    window.location.href = decodeURIComponent(page as string);
  } else {
    router.push(path);
  }
}

// 下载二进制文件
export function downloadFile(blobData: Blob, fileName = "模板") {

  const blob = new Blob([blobData], { type: blobData.type });

  const _URL = window.URL || window.webkitURL;
  const objectUrl = _URL.createObjectURL(blob);
  if (fileName) {
    const a = document.createElement("a");
    if (typeof a.download === "undefined") {
      window.open(objectUrl)
    } else {
      a.href = objectUrl;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      a.remove();
    }
  } else {
    window.open(objectUrl)
  }

  // if (typeof window.navigator?.msSaveBlob !== "undefined") {
  //   //for Ie >= ie10
  //   window.navigator?.msSaveBlob(blob, fileName);
  // } else {
  //   //for none-ie

  // }
}

function isObject(obj: any) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}
function isArray(arr: any) {
  return Array.isArray(arr);
}
/**
 * @description: 合并配置
 * @param {*} source 源对象配置
 * @param {*} ...arg 配置
 * @author: 吴玉荣
 */
export function mergeConfig(target: any, ...arg: any) {
  return arg.reduce((acc: any, cur: any) => {
    return Object.keys(cur).reduce((subAcc, key) => {
      const srcVal = cur[key];
      if (isObject(srcVal)) {
        subAcc[key] = mergeConfig(subAcc[key] ? subAcc[key] : {}, srcVal);
      } else if (isArray(srcVal)) {
        // series: []，下层数组直接赋值
        subAcc[key] = srcVal.map((item: any, idx: number) => {
          if (isObject(item)) {
            const curAccVal = subAcc[key] ? subAcc[key] : [];
            return mergeConfig(curAccVal[idx] ? curAccVal[idx] : {}, item);
          } else {
            return item;
          }
        });
      } else {
        subAcc[key] = srcVal;
      }
      return subAcc;
    }, acc);
  }, target);
}


/**
 * @description: 过滤新对象
 * @author: 吴玉荣
 */
export function filterObj (sourceObj: ObjectType, keys: Array<string>) {
  let result:ObjectType = {} 
  for (let i = 0; i < keys.length; i++) {
    result[keys[i]]  = sourceObj[keys[i]]
  }
  return result
}

/**
 * @description: 深克隆
 * @author: 吴玉荣
 */
export function deepCopy(obj: any) {
  let result = new obj.constructor();
  for (let i in obj) {
    if (isArray(obj[i]) || isObject(obj[i])) {
      result[i] = deepCopy(obj[i])
    } else {
      result[i] = obj[i]
    }
  }
  return result
}
