var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry:path.join(__dirname,'./src/main.js'),
    output: {
        path:path.join(__dirname,'./dist'),
        filename: "bundle.js"
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname,'./src/index.html'),
            filename: "index.html"
        }),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            {test: /\.css$/,use:['style-loader','css-loader']},
            {test: /\.less$/,use:['style-loader','css-loader','less-loader']},
            {test: /\.scss$/,use:['style-loader','css-loader','sass-loader']},
            {test: /\.(jpg|jpeg|gif|bmp|png)$/, use: ['url-loader?limit=182220&name=[hash:7]-[name].[ext]']},
            {test: /\.(ttf|woff2|eot|svg|woff)$/,use:['url-loader']},  // 处理字体文件的loader
            {test: /\.js$/,use:'babel-loader', exclude: /node_modules/}, // 配置babel 来转换高级的ES语法
            {test: /\.vue$/,use:'vue-loader', exclude: /node_modules/} // 出来 .vue 的loader
        ]
    },
    resolve:{
        alias: {
            // "vue$":"vue/dist/vue.js"
        }
    }
};