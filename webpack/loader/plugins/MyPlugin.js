class MyPlugin {
  constructor(option) {
    console.log("Plugin被创建了", option);
  }
  apply (compiler) {
    // console.log(compiler)
    compiler.hooks.done.tap("MyPlugin", (compilation) => {
      console.log("compilation done");
    });
  }
}
module.exports = MyPlugin;