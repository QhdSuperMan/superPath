/*
 * @Author: your name
 * @Date: 2021-06-30 23:23:23
 * @LastEditTime: 2021-06-30 23:23:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \albb\ts\命名空间\ZipCodeValidator.ts
 */

namespace Validation {
    const numberRegexp = /^[0-9]+$/;
    export class ZipCodeValidator implements StringValidator {
        isAcceptable(s: string) {
            return s.length === 5 && numberRegexp.test(s);
        }
    }
}