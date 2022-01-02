setImmediate(function () {
  console.log("setImmediate");
}, 14)
setTimeout(function () {
  console.log("setTimeout");
}, 14)
process.nextTick(function(){
  console.log("process.nextTick");
})