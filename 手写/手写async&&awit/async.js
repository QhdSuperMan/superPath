/*
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2021-04-15 10:31:07
 * @LastEditTime: 2021-04-15 11:36:06
 * @info: 描述
 */
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error); return;
  } if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this, args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}

function demo() {
  return _demo.apply(this, arguments);
}

function _demo() {
  _demo = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
    var a;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return test();

          case 2:
            a = _context.sent;
            console.log(a);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _demo.apply(this, arguments);
}

function test() {
  return new Promise(function (reslove, reject) {
    reslove(1);
  });
}

demo();