/*
 * @Author: your name
 * @Date: 2021-06-30 23:06:29
 * @LastEditTime: 2021-06-30 23:50:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \albb\ts\模块\text.ts
 */
declare module "*text" {
    const content: string;
    export default content;
}
declare module '*.json' {
    const value: any;
    export default value;
}
declare module '*.json' {
    export class Dog { }
}

declare module "url" {
    export interface Url {
        protocol?: string;
        hostname?: string;
        pathname?: string;
    }

    export function parse(urlStr: string, parseQueryString?, slashesDenoteHost?): Url;
}

