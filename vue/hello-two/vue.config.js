const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  plugins: [
    new SkeletonPlugin({
      pathname: path.resolve(__dirname, '../shell'), // the path to store shell file
      staticDir: path.resolve(__dirname, '../dist'), // the same as the `output.path`
      routes: ['/'], // Which routes you want to generate skeleton screen
    })
  ]
})
