/*
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2021-12-13 14:04:24
 * @LastEditTime: 2021-12-13 17:44:15
 * @info: 描述
 */
const path = require('path')
module.exports = {
  rootDir: path.resolve(__dirname),
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  // "transform": {
  //   ".(ts|tsx)": "ts-jest"
  // },
  // "testEnvironment": "jsdom",
  // "testRegex": "/test/.*\\.(test|spec)\\.(ts)$",
  // "moduleFileExtensions": [
  //   "ts",
  //   "tsx",
  //   "js"
  // ],
  // "coverageThreshold": {
  //   "global": {
  //     "branches": 90,
  //     "functions": 95,
  //     "lines": 95,
  //     "statements": 95
  //   }
  // },
  "collectCoverageFrom": [
    "src/*.{js,ts,vue}",
    "src/**/*.{js,ts,vue}"
  ],
  // "setupFilesAfterEnv": [
  //   "<rootDir>/test/boot.ts"
  // ]
}
