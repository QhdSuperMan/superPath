/// <reference types="vite/client" />
declare module '*.vue' {
   import type { DefineComponent } from 'vue'
   const component: DefineComponent<{}, {}, any>
   export default component
}

// declare module "element-plus";
declare module 'clipboard'

declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'
declare module '*.yaml'
declare module '*.json'
declare module 'vue-count-to'





