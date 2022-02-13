
console.log(111);
setImmediate(function immediate () {
  console.log('immediate');
},0);
setTimeout(function timeout () {
  console.log('timeout');
},0);