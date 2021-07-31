// loader
// 单一原则: 每个Loader只做一件事，简单易用，便于维护；
// 链式调用: Webpack 会按顺序链式调用每个Loader；
// 统一原则: 遵循Webpack制定的设计规则和结构，输入与输出均为字符串，各个Loader完全独立，即插即用；
// 无状态原则：在转换不同模块时，不应该在loader中保留状态；



// plugins
// webpack启动，执行new myPlugin(options)，初始化插件并获取实例
// 初始化complier对象，调用myPlugin.apply(complier)给插件传入complier对象
// 插件实例获取complier，通过complier监听webpack广播的事件，通过complier对象操作webpack