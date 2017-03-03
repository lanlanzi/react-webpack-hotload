/**
 * Created by Administrator on 2017/3/3.
 */
var path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: ['webpack/hot/dev-server', path.resolve(__dirname, './app/main.js')],
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        port: 8099
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            } //将react编译成js文件
        },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            //打包css文件
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            //编译sass文件
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
            //对图片进行打包
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './build/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
};