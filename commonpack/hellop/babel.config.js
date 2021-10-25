module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  "plugins": [
    [
      "component",
      {
        "libraryName": "commonp",
        "styleLibraryName": "style"
      },
      // "component",
      // {
      //   "libraryName": "element-ui",
      //   "styleLibraryName": "theme-chalk"
      // }
    ],
  ]
}
