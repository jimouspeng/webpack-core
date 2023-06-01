/** webpack 自定义插件
 * 生命周期钩子：由compiler暴露，调用方式 —— compiler.hooks.someHook.tap('MyPlugin', (params) => { ... });
 */
const fs = require('fs')
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
            console.log('compiler-hooks: environment')
        })
        compiler.hooks.afterEnvironment.tap('PlgCore ', () => {
            console.log('compiler-hooks: afterEnvironment ')
        })
        compiler.hooks.entryOption.tap('PlgCore', (context, entry) => {
            /** 在webpack配置entry被处理之后调用
             * context：配置的context，即基础路径，用于配置解析入口点和loader
             * entry: 配置的入口
             */
            console.log('compiler-hooks: entryOption')
            console.log('context: ', context, '\n\r', 'entry: ', entry)
        })
        compiler.hooks.afterPlugins.tap('PlgCore', (compiler) => {
            /** 在初始化内部插件集合完成设置之后调用 */
            console.log('compiler-hooks: afterPlugins')
            // console.log('compiler: ', compiler)
        })
        compiler.hooks.afterResolvers.tap('PlgCore', () => {
            console.log('compiler-hooks: afterResolvers')
        })
        compiler.hooks.initialize.tap('PlgCore', () => {
            console.log('compiler-hooks: initialize')
        })
        compiler.hooks.beforeRun.tap('PlgCore', () => {
            console.log('compiler-hooks: beforeRun')
        })
        compiler.hooks.environment.tap('PlgCore', () => {
            console.log('compiler-hooks: environment')
        })
        compiler.hooks.beforeCompile.tap('PlgCore', (compilationParams) => {
            /** 在创建 compilation parameter 之后执行 */
            // console.log('compilationParams: ', compilationParams)
        })
        compiler.hooks.thisCompilation.tap('PlgCore', (compilation, compilationParams) => {
            /** 初始化 compilation 时调用 */
            console.log('compilation', Object.keys(compilation))
            console.log('compilationParams: ', Object.keys(compilationParams))
            /** compilation-hooks: asset 处理阶段 */
            compilation.hooks.processAssets.tap(
                {
                    name: 'PlgAddFile',
                    stage: Compilation.PROCESS_ASSETS_STAGE_SUMMARIZE, // 代表在【整理现有 asset 列表】阶段处理
                },
                (assets) => {
                    // "assets" 是一个包含 compilation 中所有资源(assets)的对象。
                    console.log('assets: ', Object.keys(assets))
                    compilation.emitAsset('./src/haha.txt', new RawSource('1212'))
                }
            )
        })
        compiler.hooks.shouldEmit.tap('PlgCore', (compilation) => {
            /** 在输出 asset 之前调用。返回一个布尔值，告知是否输出 */
            // return false
        })
        compiler.hooks.emit.tap('PlgCore', (compilation) => {
            /** 输出 asset 到 output 目录之前执行
             * 此时不建议调用compilation.emitAsset，会提示：
             *  Do changes to assets earlier, e. g. in Compilation.hooks.processAssets (虽然最终也会执行)
             */
            // compilation.emitAsset('./src/haha.txt', new RawSource('1212'))
            // console.log('compilation：', Object.keys(compilation))
        })
        compiler.hooks.afterEmit.tap('PlgCore', (compilation) => {
            /** 输出 asset 到 output 目录之后执行 */
            // console.log('compilation：', Object.keys(compilation))
        })
    }
}

module.exports = PlgCore
