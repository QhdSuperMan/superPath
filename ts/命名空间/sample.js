/*
 * @Author: your name
 * @Date: 2021-06-30 23:22:54
 * @LastEditTime: 2021-06-30 23:28:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \albb\ts\命名空间\Validation.ts
 */
/*
 * @Author: your name
 * @Date: 2021-06-30 23:23:06
 * @LastEditTime: 2021-06-30 23:29:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \albb\ts\命名空间\LettersOnlyValidator.ts
 */
var Validation;
(function (Validation) {
    var lettersRegexp = /^[A-Za-z]+$/;
    var LettersOnlyValidator = /** @class */ (function () {
        function LettersOnlyValidator() {
        }
        LettersOnlyValidator.prototype.isAcceptable = function (s) {
            return lettersRegexp.test(s);
        };
        return LettersOnlyValidator;
    }());
    Validation.LettersOnlyValidator = LettersOnlyValidator;
})(Validation || (Validation = {}));
/*
 * @Author: your name
 * @Date: 2021-06-30 23:23:23
 * @LastEditTime: 2021-06-30 23:23:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \albb\ts\命名空间\ZipCodeValidator.ts
 */
var Validation;
(function (Validation) {
    var numberRegexp = /^[0-9]+$/;
    var ZipCodeValidator = /** @class */ (function () {
        function ZipCodeValidator() {
        }
        ZipCodeValidator.prototype.isAcceptable = function (s) {
            return s.length === 5 && numberRegexp.test(s);
        };
        return ZipCodeValidator;
    }());
    Validation.ZipCodeValidator = ZipCodeValidator;
})(Validation || (Validation = {}));
/*
 * @Author: your name
 * @Date: 2021-06-30 23:23:38
 * @LastEditTime: 2021-06-30 23:29:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \albb\ts\命名空间\test.ts
 */
/// <reference path="Validation.ts" />
/// <reference path="LettersOnlyValidator.ts" />
/// <reference path="ZipCodeValidator.ts" />
// Some samples to try
var strings = ["Hello", "98052", "101"];
// Validators to use
var validators = {};
validators["ZIP code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();
// Show whether each string passed each validator
for (var _i = 0, strings_1 = strings; _i < strings_1.length; _i++) {
    var s = strings_1[_i];
    for (var name_1 in validators) {
        console.log("\"" + s + "\" - " + (validators[name_1].isAcceptable(s) ? "matches" : "does not match") + " " + name_1);
    }
}
