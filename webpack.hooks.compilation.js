/** webpack compilation钩子函数 */
const useTap = 'PlgCore'
function hooksRegister(compilation, webpack) {
    const { Compilation } = webpack
    /** RawSource 是其中一种'source'类型，用来在compilation中表示资源的源码 */
    const { RawSource } = webpack.sources
    compilation.hooks.buildModule.tap(useTap, (module) => {
        console.log('compilation hooks: buildModule')
    })
    compilation.hooks.processAssets.tap(
        /** compilation-hooks: asset 处理阶段 */
        {
            name: 'PlgAddFile',
            stage: Compilation.PROCESS_ASSETS_STAGE_SUMMARIZE, // 代表在【整理现有 asset 列表】阶段处理
        },
        (assets) => {
            // "assets" 是一个包含 compilation 中所有资源(assets)的对象。
            // console.log('assets: ', Object.keys(assets))
            compilation.emitAsset('./src/haha.txt', new RawSource('1212'))
        }
    )
}

exports.compilationHooksRegister = hooksRegister
