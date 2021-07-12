var obj = {
  num: 'num', // 数量 
  price: 'price', // 单价
  total: 'total', // 总价
}
// 总价 = 数量 * 单价
// 获取对象中值得key
function getType (obj, key) {
  for (var i in obj) {
    if (obj[i] === key) {
      return i
    }
  }
  new Error('计算对象错误 或 key值有误')
}
function isNumber (price) {
  return !isNaN(parseInt(price))
}
function getNumber (price) {
  if (price === '' || price === undefined || price === null) {
    return ''
  }
  return Number(price)
}
// 获取对象中值得key
function computeTotal (row, obj, key) {
  // 判断是否是数字
  if (isNaN(row[key]) || Number(row[key]) < 0) {
    row[key] = 0
  }
  // 输入数量
  if (getType(obj, key) === 'num') {
    if (isNumber(row[obj.price])) { // 输入数量时当三个都存在算(数量 * 单价）
      row[obj.total] = (row[obj.price] * row[obj.num]).toFixed(2)
    } else if (isNumber(row[obj.total])) {
      row[obj.price] = (row[obj.total] / row[obj.num]).toFixed(2)
    }
  }
  // 输入总价
  if (getType(obj, key) === 'total') {
    if (isNumber(row[obj.num])) { // 输入总价时当三个都存在算(总价 / 数量)
      row[obj.price] = (row[obj.total] / row[obj.num]).toFixed(2)
    } else if (isNumber(row[obj.price])) {  
      row[obj.num] = (row[obj.total] / row[obj.price]).toFixed(2)
    }  
  }
  // 输入商品价格
  if (getType(obj, key) === 'price') { // 计算商品金额
    if (isNumber(row[obj.num])) { // 输入单价时当三个都存在算(数量 * 单价）
      row[obj.total] = (row[obj.price] * row[obj.num]).toFixed(2)
    } else if (isNumber(row[obj.total])) {  
      row[obj.num] = (row[obj.total] / row[obj.price]).toFixed(2)
    }  
  }
}
var row = {
  num: 2,
  price: 4,
  total: 9
}
computeTotal(row, obj, 'total')
console.log(row)