const path = require('path')
const PluginCore = require('./webpack.plugin')

module.exports = {
    // entry: path.resolve('./src/index.js'),
    // entry: () => path.resolve('./src/index.js'),
    context: path.resolve(__dirname, './src'),
    entry: {
        index: './index.js',
        main: './main.js',
    },
    plugins: [
        new PluginCore({
            name: 'jimous',
        }),
    ],
    mode: 'development',
}
