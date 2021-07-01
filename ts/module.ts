/*
 * @Author: your name
 * @Date: 2021-06-30 22:50:52
 * @LastEditTime: 2021-06-30 22:52:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \albb\ts\module.ts
 */
let numberRegexp = /^[0-9]+$/;
class ZipCodeValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}
export default  ZipCodeValidator;