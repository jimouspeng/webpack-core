/** webpack compilation钩子函数 */
const useTap = 'PlgCore'
function hooksRegister(compilation, webpack) {
    const { Compilation } = webpack
    /** RawSource 是其中一种'source'类型，用来在compilation中表示资源的源码 */
    const { RawSource } = webpack.sources
    compilation.hooks.buildModule.tap(useTap, (module) => {
        /** SyncHook 在模块构建开始之前触发，可以用来修改模块 */
        console.log('compilation hooks: buildModule')
    })
    compilation.hooks.rebuildModule.tap(useTap, (module) => {
        /** SyncHook 在重新构建一个模块之前触发 */
        console.log('compilation hooks: rebuildModule')
    })
    compilation.hooks.failedModule.tap(useTap, (module, error) => {
        /** SyncHook 模块构建失败时执行 */
        console.log('compilation hooks: failedModule')
    })
    compilation.hooks.succeedModule.tap(useTap, (module) => {
        /** SyncHook 模块构建成功时执行 */
        console.log('compilation hooks: succeedModule')
    })
    compilation.hooks.finishModules.tap(useTap, (modules) => {
        /** AsyncSeriesHook 所有模块都完成构建并且没有错误时执行 */
        console.log('compilation hooks: finishModules')
    })
    compilation.hooks.finishRebuildingModule.tap(useTap, (module) => {
        /** SyncHook 一个模块完成重新构建时执行，在都成功或有错误的情况下  */
        console.log('compilation hooks: finishRebuildingModule')
    })
    compilation.hooks.seal.tap(useTap, () => {
        /** SyncHook compilation 对象停止接收新的模块时触发 */
        console.log('compilation hooks: seal')
    })
    compilation.hooks.unseal.tap(useTap, () => {
        /** SyncHook compilation 对象停止接收新的模块时触发 */
        console.log('compilation hooks: unseal')
    })
    compilation.hooks.optimizeDependencies.tap(useTap, (modules) => {
        /** SyncBailHook 依赖优化开始时触发 */
        console.log('compilation hooks: optimizeDependencies')
    })
    compilation.hooks.afterOptimizeDependencies.tap(useTap, (modules) => {
        /** SyncHook 依赖优化之后触发 */
        console.log('compilation hooks: afterOptimizeDependencies')
    })
    compilation.hooks.optimize.tap(useTap, () => {
        /** SyncHook 优化阶段开始时触发 */
        console.log('compilation hooks: optimize')
    })
    compilation.hooks.optimizeModules.tap(useTap, (modules) => {
        /** SyncBailHook 在模块优化阶段开始时调用。插件可以 tap 此钩子对模块进行优化 */
        console.log('compilation hooks: optimizeModules')
    })
    compilation.hooks.afterOptimizeModules.tap(useTap, (modules) => {
        /** SyncHook 在模块优化完成之后调用 */
        console.log('compilation hooks: afterOptimizeModules')
    })
    compilation.hooks.optimizeChunks.tap(useTap, (chunks) => {
        /** SyncBailHook 在 chunk 优化阶段开始时调用。插件可以 tap 此钩子对 chunk 执行优化 */
        console.log('compilation hooks: optimizeChunks')
    })
    compilation.hooks.afterOptimizeChunks.tap(useTap, (chunks) => {
        /** SyncHook chunk 优化完成之后触发 */
        console.log('compilation hooks: afterOptimizeChunks')
    })
    compilation.hooks.optimizeTree.tap(useTap, (chunks, modules) => {
        /** AsyncSeriesHook 在优化依赖树之前调用。插件可以 tap 此钩子执行依赖树优化 */
        console.log('compilation hooks: optimizeTree')
    })
    compilation.hooks.afterOptimizeTree.tap(useTap, (chunks, modules) => {
        /** SyncHook 在依赖树优化成功完成之后调用 */
        console.log('compilation hooks: afterOptimizeTree')
    })
    compilation.hooks.optimizeChunkModules.tap(useTap, (chunks, modules) => {
        /** SyncBailHook 在树优化之后，chunk 模块优化开始时调用。插件可以 tap 此钩子来执行 chunk 模块的优化 */
        console.log('compilation hooks: optimizeChunkModules')
    })
    compilation.hooks.afterOptimizeChunkModules.tap(useTap, (chunks, modules) => {
        /** SyncHook 在 chunk 模块优化成功完成之后调用 */
        console.log('compilation hooks: afterOptimizeChunkModules')
    })
    compilation.hooks.shouldRecord.tap(useTap, () => {
        /** SyncBailHook 调用来决定是否存储 record。
         * 返回任何内容 !== false 将阻止执行所有其他 "record" 钩子: record, recordModules,recordChunks, recordHash
         */
        console.log('compilation hooks: shouldRecord')
    })
    compilation.hooks.reviveModules.tap(useTap, (modules, records) => {
        /** SyncHook 从 record 中恢复模块信息 */
        console.log('compilation hooks: reviveModules')
    })
    compilation.hooks.beforeModuleIds.tap(useTap, (modules) => {
        /** SyncHook 在为每个模块分配 id 之前执行 */
        console.log('compilation hooks: beforeModuleIds')
    })
    compilation.hooks.moduleIds.tap(useTap, (modules) => {
        /** SyncHook 调用来每个模块分配一个 id */
        console.log('compilation hooks: moduleIds')
    })
    compilation.hooks.optimizeModuleIds.tap(useTap, (modules) => {
        /** SyncHook 在模块 id 优化开始时调用 */
        console.log('compilation hooks: optimizeModuleIds')
    })
    compilation.hooks.afterOptimizeModuleIds.tap(useTap, (modules) => {
        /** SyncHook 在模块 id 优化完成时调用 */
        console.log('compilation hooks: afterOptimizeModuleIds')
    })
    compilation.hooks.reviveChunks.tap(useTap, (chunks, records) => {
        /** SyncHook 从 record 中恢复 chunk 信息 */
        console.log('compilation hooks: reviveChunks')
    })
    compilation.hooks.beforeChunkIds.tap(useTap, (chunks) => {
        /** SyncHook 在为每个 chunk 分配 id 之前执行 */
        console.log('compilation hooks: beforeChunkIds')
    })
    compilation.hooks.chunkIds.tap(useTap, (chunks) => {
        /** SyncHook 调用时，会为每个 chunk 分配一个 id */
        console.log('compilation hooks: chunkIds')
    })
    compilation.hooks.optimizeChunkIds.tap(useTap, (chunks) => {
        /** SyncHook 在 chunk id 优化阶段开始时调用 */
        console.log('compilation hooks: optimizeChunkIds')
    })
    compilation.hooks.afterOptimizeChunkIds.tap(useTap, (chunks) => {
        /** SyncHook chunk id 优化结束之后触发 */
        console.log('compilation hooks: afterOptimizeChunkIds')
    })
    compilation.hooks.recordModules.tap(useTap, (chunks, records) => {
        /** SyncHook 将模块信息存储到 record 中。shouldRecord 返回 truthy 值时触发 */
        console.log('compilation hooks: recordModules')
    })
    compilation.hooks.recordChunks.tap(useTap, (chunks, records) => {
        /** SyncHook 将 chunk 存储到 record 中。shouldRecord 返回 truthy 值时触发 */
        console.log('compilation hooks: recordChunks')
    })
    compilation.hooks.beforeModuleHash.tap(useTap, () => {
        /** SyncHook 在创建模块哈希（hash）之前 */
        console.log('compilation hooks: beforeModuleHash')
    })
    compilation.hooks.afterModuleHash.tap(useTap, () => {
        /** syncHook 在创建模块哈希（hash）之后 */
        console.log('compilation hooks: afterModuleHash')
    })
    compilation.hooks.beforeHash.tap(useTap, () => {
        /** SyncHook 在 compilation 添加哈希（hash）之前 */
        console.log('compilation hooks: beforeHash')
    })
    compilation.hooks.afterHash.tap(useTap, () => {
        /** SyncHook 在 compilation 添加哈希（hash）之后 */
        console.log('compilation hooks: afterHash')
    })
    compilation.hooks.recordHash.tap(useTap, (records) => {
        /** SyncHook 将有关 record 的信息存储到 records 中。仅在 shouldRecord 返回 truthy 值时触发 */
        console.log('compilation hooks: recordHash')
    })
    compilation.hooks.record.tap(useTap, (compilation, records) => {
        /** SyncHook 将 compilation 相关信息存储到 record 中。仅在 shouldRecord 返回 truthy 值时触发 */
        console.log('compilation hooks: record')
    })
    compilation.hooks.beforeModuleAssets.tap(useTap, () => {
        /** SyncHook 在创建模块 asset 之前执行 */
        console.log('compilation hooks: beforeModuleAssets')
    })
    // compilation.hooks.additionalChunkAssets.tap(useTap, (chunks) => {
    //     /**  已弃用（可使用 Compilation.hook.processAssets 来代替，
    //      * 并且可使用 ompilation.PROCESS_ASSETS_STAGE_* 作为其选项参数。） */
    //     console.log('compilation hooks: additionalChunkAssets')
    // })
    compilation.hooks.shouldGenerateChunkAssets.tap(useTap, () => {
        /** SyncBailHook 调用以确定是否生成 chunk asset。返回任何 !== false 将允许生成 chunk asset */
        console.log('compilation hooks: shouldGenerateChunkAssets')
    })
    compilation.hooks.beforeChunkAssets.tap(useTap, () => {
        /** SyncHook 在创建 chunk asset 之前 */
        console.log('compilation hooks: beforeChunkAssets')
    })
    compilation.hooks.additionalAssets.tap(useTap, () => {
        /** AsyncSeriesHook 为 compilation 创建额外 asset。 这个钩子可以用来下载图像 */
        console.log('compilation hooks: additionalAssets')
    })
    // compilation.hooks.optimizeChunkAssets.tap(useTap, (chunks) => {
    //     /** optimizeChunkAssets 已弃用。
    //      * 可使用 Compilation.hook.processAssets 来代替，并且可使用 Compilation.PROCESS_ASSETS_STAGE_* 作为其选项参数 */
    // })
    // compilation.hooks.afterOptimizeChunkAssets.tap(useTap, (chunks) => {
    //     /** afterOptimizeChunkAssets 已弃用。
    //      * 可使用 Compilation.hook.processAssets 来代替，并且可使用 Compilation.PROCESS_ASSETS_STAGE_* 作为其选项参数  */
    // })
    compilation.hooks.optimizeAssets.tap(useTap, (assets) => {
        /** AsyncSeriesHook 优化存储在 compilation.assets 中的所有 asset */
        console.log('compilation hooks: optimizeAssets')
    })
    compilation.hooks.afterOptimizeAssets.tap(useTap, (assets) => {
        /** SyncHook asset 已经优化 */
        console.log('compilation hooks: afterOptimizeAssets')
    })
    compilation.hooks.processAssets.tap(
        /** AsyncSeriesHook */
        {
            name: 'PlgAddFile',
            stage: Compilation.PROCESS_ASSETS_STAGE_SUMMARIZE, // 代表在【整理现有 asset 列表】阶段处理
        },
        /** "assets" 是一个包含 compilation 中所有资源(assets)的对象。
         * 其中 key 是 asset 的路径名，value 是 asset 的数据 */
        (assets) => {
            console.log('compilation hooks: processAssets')
            // console.log('assets: ', Object.keys(assets))
            compilation.emitAsset('./src/haha.txt', new RawSource('1212'))
        }
    )
    compilation.hooks.afterProcessAssets.tap(useTap, () => {
        /** SyncHook 在 processAssets hook 无错误执行后调用 */
        console.log('compilation hooks: afterProcessAssets')
    })
    compilation.hooks.needAdditionalSeal.tap(useTap, () => {
        /** SyncBailHook 调用来决定 compilation 是否需要解除 seal 以引入其他文件 */
        console.log('compilation hooks: needAdditionalSeal')
    })
    compilation.hooks.afterSeal.tap(useTap, () => {
        /** AsyncSeriesHook 在 needAdditionalSeal 之后立即执行 */
        console.log('compilation hooks: afterSeal')
    })
    compilation.hooks.chunkHash.tap(useTap, (chunk, chunkHash) => {
        /** SyncHook 触发来为每个 chunk 生成 hash */
        console.log('compilation hooks: chunkHash')
    })
    compilation.hooks.moduleAsset.tap(useTap, (module, filename) => {
        /** SyncHook 一个模块中的一个 asset 被添加到 compilation 时调用 */
        console.log('compilation hooks: moduleAsset')
    })
    compilation.hooks.chunkAsset.tap(useTap, (chunk, filename) => {
        /** SyncHook 一个 chunk 中的一个 asset 被添加到 compilation 时调用 */
        console.log('compilation hooks: chunkAsset')
    })
    compilation.hooks.assetPath.tap(useTap, (path, options) => {
        /** SyncWaterfallHook 调用以决定 asset 的路径 */
        console.log('compilation hooks: assetPath')
    })
    compilation.hooks.needAdditionalPass.tap(useTap, () => {
        /** SyncBailHook 调用以决定 asset 在输出后是否需要进一步处理 */
        console.log('compilation hooks: needAdditionalPass')
    })
    compilation.hooks.childCompiler.tap(useTap, (childCompiler, compilerName, compilerIndex) => {
        /** SyncHook 子 compiler 设置之后执行 */
        console.log('compilation hooks: childCompiler')
    })
    // compilation.hooks.normalModuleLoader.tap(useTap, () => {
    //     /** 从 webpack v5 开始，normalModuleLoader 钩子已经删除。
    //      * 现在要访问 loader 请改用 NormalModule.getCompilationHooks(compilation).loader */
    //     console.log('compilation hooks: normalModuleLoader')
    // })
}

exports.compilationHooksRegister = hooksRegister
