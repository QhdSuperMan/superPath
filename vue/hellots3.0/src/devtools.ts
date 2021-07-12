/*
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2021-04-08 15:07:20
 * @LastEditTime: 2021-04-08 15:14:22
 * @info: 描述
 */
// devtools.ts
import { App, Plugin } from 'vue';

// my own addition to satisfy ts
declare global {
    interface Window { __VUE_DEVTOOLS_GLOBAL_HOOK__: any }
}

const devtools: Plugin = {
	install(app: App) {
		// if (process.env.NODE_ENV === 'development' && window.__VUE_DEVTOOLS_GLOBAL_HOOK__) {
		// 	window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app.constructor;
		// }
	},
};

export { devtools };