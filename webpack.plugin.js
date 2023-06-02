/** webpack 自定义插件
 * 生命周期钩子：由compiler暴露，调用方式 —— compiler.hooks.someHook.tap('MyPlugin', (params) => { ... });
 */
const fs = require('fs')
const { compilationHooksRegister } = require('./webpack.hooks.compilation')
console.log(compilationHooksRegister, '?????')
// const webpack = require('webpack')
class PlgCore {
    constructor(options) {
        console.log('options: ', options)
    }
    apply(compiler) {
        /** 与通过require/import的方式引入webpack相比，从compiler获取 webpack 实例，保证webpack版本一致性 */
        const { webpack } = compiler
        /** Compilation对象提供了一些有用常量的访问 */
        const { Compilation } = webpack
        /** RawSource 是其中一种'source'类型，用来在compilation中表示资源的源码 */
        const { RawSource } = webpack.sources

        console.log('webpack：', Object.keys(webpack))

        /** compiler 钩子 */
        compiler.hooks.environment.tap('PlgCore', () => {
            /** SyncHook 在编译器准备环境时调用，时机就在配置文件中初始化插件之后 */
            console.log('compiler-hooks: environment')
        })
        compiler.hooks.afterEnvironment.tap('PlgCore ', () => {
            /** SyncHook 当编译器环境设置完成后，在 environment hook 后直接调用 */
            console.log('compiler-hooks: afterEnvironment ')
        })
        compiler.hooks.entryOption.tap('PlgCore', (context, entry) => {
            /** SyncBailHook 在webpack配置entry被处理之后调用
             * context：配置的context，即基础路径，用于配置解析入口点和loader
             * entry: 配置的入口
             */
            console.log('compiler-hooks: entryOption')
            // console.log('context: ', context, '\n\r', 'entry: ', entry)
        })
        compiler.hooks.afterPlugins.tap('PlgCore', (compiler) => {
            /** SyncHook 在初始化内部插件集合完成设置之后调用 */
            console.log('compiler-hooks: afterPlugins')
        })
        compiler.hooks.afterResolvers.tap('PlgCore', (compiler) => {
            /** SyncHook resolver 设置完成之后触发 */
            console.log('compiler-hooks: afterResolvers')
        })
        compiler.hooks.initialize.tap('PlgCore', () => {
            /** SyncHook 当编译器对象被初始化时调用 */
            console.log('compiler-hooks: initialize')
        })
        compiler.hooks.beforeRun.tap('PlgCore', (compiler) => {
            /** AsyncSeriesHook 在开始执行一次构建之前调用，compiler.run 方法开始执行后立刻进行调用 */
            console.log('compiler-hooks: beforeRun')
        })
        compiler.hooks.run.tap('PlgCore', (compiler) => {
            /** AsyncSeriesHook 在开始读取 records 之前调用 */
            console.log('compiler-hooks: run')
        })
        compiler.hooks.watchRun.tap('PlgCore', (compiler) => {
            /** AsyncSeriesHook 在监听模式下，一个新的 compilation 触发之后，但在 compilation 实际开始之前执行 */
            console.log('compiler-hooks: watchRun')
        })
        compiler.hooks.normalModuleFactory.tap('PlgCore', (normalModuleFactory) => {
            /** SyncHook NormalModuleFactory 创建之后调用 */
            console.log('compiler-hooks: normalModuleFactory')
        })
        compiler.hooks.contextModuleFactory.tap('PlgCore', (contextModuleFactory) => {
            /** SyncHook ContextModuleFactory 创建之后调用 */
            console.log('compiler-hooks: contextModuleFactory')
        })
        compiler.hooks.beforeCompile.tap('PlgCore', (compilationParams) => {
            /** AsyncSeriesHook 在创建 compilation parameter 之后执行; 此钩子可用于添加/修改 compilation parameter */
            console.log('compiler-hooks: beforeCompile')
        })
        compiler.hooks.compile.tap('PlgCore', (compilationParams) => {
            /** SyncHook beforeCompile 之后立即调用 */
            console.log('compiler-hooks: compile')
        })
        compiler.hooks.thisCompilation.tap('PlgCore', (compilation, compilationParams) => {
            /** SyncHook 初始化 compilation 时调用，在触发 compilation 事件之前调用 */
            console.log('compiler-hooks: thisCompilation')
            compilationHooksRegister(compilation, webpack)
            // console.log('compilation', Object.keys(compilation))
            // console.log('compilationParams: ', Object.keys(compilationParams))
        })
        compiler.hooks.compilation.tap('PlgCore', (compilation, compilationParams) => {
            /** SyncHook compilation 创建之后执行 */
            console.log('compiler-hooks: compilation')
        })
        compiler.hooks.make.tap('PlgCore', (compilation) => {
            /** AsyncParallelHook compilation 结束之前执行 */
            console.log('compiler-hooks: make')
        })
        compiler.hooks.afterCompile.tap('PlgCore', (compilation) => {
            /** AsyncSeriesHook compilation 结束和封印之后执行 */
            console.log('compiler-hooks: afterCompile')
        })
        compiler.hooks.shouldEmit.tap('PlgCore', (compilation) => {
            /** SyncBailHook 在输出 asset 之前调用。返回一个布尔值，告知是否输出 */
            console.log('compiler-hooks: shouldEmit')
            return true
        })
        compiler.hooks.emit.tap('PlgCore', (compilation) => {
            /** AsyncSeriesHook 输出 asset 到 output 目录之前执行
             * 此时不建议调用compilation.emitAsset，会提示：
             *  Do changes to assets earlier, e. g. in Compilation.hooks.processAssets (虽然最终也会执行)
             */
            // compilation.emitAsset('./src/haha.txt', new RawSource('1212'))
            // console.log('compilation：', Object.keys(compilation))
            console.log('compiler-hooks: emit')
        })
        compiler.hooks.afterEmit.tap('PlgCore', (compilation) => {
            /** AsyncSeriesHook 输出 asset 到 output 目录之后执行 */
            console.log('compiler-hooks: afterEmit')
            // console.log('compilation：', Object.keys(compilation))
        })
        compiler.hooks.assetEmitted.tap('PlgCore', (file, info) => {
            /** AsyncSeriesHook 在 asset 被输出时执行, 可以通过 info.content 访问 asset 的内容 buffer */
            console.log('compiler-hooks: assetEmitted')
        })
        compiler.hooks.done.tap('PlgCore', (stats) => {
            /** AsyncSeriesHook 在 compilation 完成时执行 */
            console.log('compiler-hooks: done')
        })
        compiler.hooks.additionalPass.tap('PlgCore', () => {
            /** AsyncSeriesHook This hook allows you to do a one more additional pass of the build. */
            console.log('compiler-hooks: additionalPass')
        })
        compiler.hooks.failed.tap('PlgCore', (error) => {
            /** SyncHook 在 compilation 失败时调用 */
            console.log('compiler-hooks: failed')
        })
        compiler.hooks.invalid.tap('PlgCore', (fileName, changeTime) => {
            /** SyncHook 在一个观察中的 compilation 无效时执行 */
            console.log('compiler-hooks: invalid')
        })
        compiler.hooks.watchClose.tap('PlgCore', () => {
            /** SyncHook 在一个观察中的 compilation 停止时执行 */
            console.log('compiler-hooks: watchClose')
        })
        compiler.hooks.shutdown.tap('PlgCore', () => {
            /** AsyncSeriesHook 当编译器关闭时调用 */
            console.log('compiler-hooks: shutdown')
        })
        compiler.hooks.infrastructureLog.tap('PlgCore', (name, type, args) => {
            /** SyncBailHook 在配置中启用 infrastructureLogging 选项 后，允许使用 infrastructure log(基础日志) */
            console.log('compiler-hooks: infrastructureLog')
        })
        // compiler.hooks.log.tap('PlgCore', (origin, logEntry) => {
        //     /** SyncBailHook 启用后允许记录到 stats 对象 */
        //     console.log('compiler-hooks: log')
        // })
    }
}

module.exports = PlgCore
