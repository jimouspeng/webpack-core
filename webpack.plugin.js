/** webpack 自定义插件
 * 生命周期钩子：由compiler暴露，调用方式 —— compiler.hooks.someHook.tap('MyPlugin', (params) => { ... });
 */
const fs = require('fs')
class PlgCore {
    constructor(options) {
        console.log('options: ', options)
    }
    apply(compiler) {
        compiler.hooks.entryOption.tap('PlgCore', (context, entry) => {
            /** 在webpack配置entry被处理之后调用
             * context：配置的context，即基础路径，用于配置解析入口点和loader
             * entry: 配置的入口
             */
            console.log('context: ', context)
            console.log('entry: ', entry)
        })
        compiler.hooks.afterPlugins.tap('PlgCore', (compiler) => {
            /** 在初始化内部插件集合完成设置之后调用 */
            // console.log('compiler: ', compiler)
        })
        compiler.hooks.beforeCompile.tap('PlgCore', (compilationParams) => {
            /** 在创建 compilation parameter 之后执行 */
            // console.log('compilationParams: ', compilationParams)
        })
        compiler.hooks.thisCompilation.tap('PlgCore', (compilation, compilationParams) => {
            /** 初始化 compilation 时调用 */
            console.log('compilation', Object.keys(compilation))
            // console.log('compilationParams: ', compilationParams)
        })
        compiler.hooks.emit.tap('PlgCore', (compilation) => {
            /** 在输出 asset 之前调用。返回一个布尔值，告知是否输出 */
            console.log('compilation：', Object.keys(compilation))
            return false
        })
    }
}

module.exports = PlgCore
