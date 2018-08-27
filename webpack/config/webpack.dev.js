const path = require("path")

module.exports = {
    mode: 'development',
    // 入口文件配置项
    entry: {
        // 里面的main是可以随便写的
        main: './src/main.js',
        // 这里添加一个入口文件
        main: './src/main2.js'
    },
    // 出口文件的配置项
    output: {
        // 打包的路径
        path: path.resolve(__dirname, '../dist'),
        // 打包的文件名称
        filename: '[name].js'  // 这里[name]，告诉我们入口进去的文件是什么名字，打包出来也同样是什么名字
    },
    // 模板：例如解读css，图片如何转换，压缩
    module: {
        rules: [
            // css loader
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'}
                ]
            }
        ]
    },
    // 插件，用于生产模板和各项功能
    plugins: [],
    // 配置webpack开发服务功能
    devServer: {
        // 设置基本的目录结构
        contentBase: path.resolve(__dirname, '../dist'),
        // 服务器的IP地址，可以使用IP也可以使用localhost
        host: 'localhost',
        // 服务端压缩是否开启
        compress: true,
        // 配置服务端口号
        port: 8888
    }
}