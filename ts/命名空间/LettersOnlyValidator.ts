/*
 * @Author: your name
 * @Date: 2021-06-30 23:23:06
 * @LastEditTime: 2021-06-30 23:29:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \albb\ts\命名空间\LettersOnlyValidator.ts
 */
namespace Validation {
    const lettersRegexp = /^[A-Za-z]+$/;
    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string) {
            return lettersRegexp.test(s);
        }
    }
}