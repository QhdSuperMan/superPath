/*
 * @Description:
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2022-11-27 14:39:45
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-01-09 22:52:44
 */
import router from "@/router/index.js";
import store from "@/store/index.js";

// 跳到登录页面
export function jumpLogin(isBack = true) {
  if (router.app._route.path === "/Login") return;
  if (isBack) {
    router.push({
      path: "/Login",
      query: {
        backRoute: router.app._route.fullPath,
      },
    });
  } else {
    router.push("/Login");
  }
}

// 获取URl参数
export function getUrlQuery(key) {
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
export function formatterObj(obj) {
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
  store.dispatch("Logout");
  jumpLogin();
}

// 跳转到原先的地址
export function jumpBackPage(path) {
  let route = getUrlQuery("backRoute");
  let page = getUrlQuery("backPage");
  if (route) {
    router.push(decodeURIComponent(route));
  } else if (page) {
    window.location.href = decodeURIComponent(page);
  } else {
    router.push(path);
  }
}

// 下载二进制文件
export function downloadFile(blob, filename = "模板") {
  let file = new File([blob], filename, blob);

  let aTag = document.createElement("a"); //创建一个a标签
  aTag.download = file.name;
  aTag.target = "_blank";
  let href = URL.createObjectURL(file); //获取url
  aTag.href = href;
  aTag.click();
  URL.revokeObjectURL(href); //释放url
}

function isObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}
function isArray(arr) {
  return Array.isArray(arr);
}
/**
 * @description: 合并配置
 * @param {*} source 源对象配置
 * @param {*} ...arg 配置
 * @author: 吴玉荣
 */
export function mergeConfig(target, ...arg) {
  return arg.reduce((acc, cur) => {
    return Object.keys(cur).reduce((subAcc, key) => {
      const srcVal = cur[key];
      if (isObject(srcVal)) {
        subAcc[key] = mergeConfig(subAcc[key] ? subAcc[key] : {}, srcVal);
      } else if (isArray(srcVal)) {
        // series: []，下层数组直接赋值
        subAcc[key] = srcVal.map((item, idx) => {
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
 * @description: 深克隆
 * @author: 吴玉荣
 */
export function deepCopy(obj) {
  let result = new obj.constructor();
  for(let i in obj) {
    if (isArray(obj[i]) || isObject(obj[i])) {
      result[i] = deepCopy(obj[i])
    } else {  
      result[i] = obj[i]
    }
  }
  return result
}
