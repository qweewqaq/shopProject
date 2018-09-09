var path = require("path");
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports={
    entry:{
        index:path.resolve(__dirname,"page/src/js/index.jsx")
    },
    output:{
        filename:"[name].bundle.js",
        path:__dirname+"/build"
    },
    resolve:{
        extensions:[' ','.js','.jsx','css']
    },
    module:{
        rules:[
            {test:/\.(jsx|js)/,exclude:/node_modules/,loaders:["babel-loader?presets[]=es2015&presets[]=react"]},
            { test: /\.less$/, exclude: /node_modules/, loader: ExtractTextPlugin.extract('style', 'css-loader!less-loader') },
            { test: /\.css$/, exclude: /node_modules/, loader: ExtractTextPlugin.extract('style', 'css-loader!') },
            { test:/\.(png|gif|jpg|jpeg|bmp)$/i, loader:'url-loader?limit=5000&name=img' },
            { test:/\.(png|woff|woff2|svg|ttf|eot)($|\?)/i, loader:'url-loader?limit=5000&name=fonts'}
        ]
    },
    // plugins: [
    //     // webpack 内置的 banner-plugin
    //     new webpack.BannerPlugin("Copyright by"),
    //
    //     // // html 模板插件
    //     // new HtmlWebpackPlugin({
    //     //     template: __dirname + '/app/index.tmpl.html'
    //     // }),
    //
    //     // 定义为生产环境，编译 React 时压缩到最小
    //     new webpack.DefinePlugin({
    //         'process.env':{
    //             'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    //         }
    //     }),
    //     // 分离CSS和JS文件
    //     new ExtractTextPlugin('[name].css'),
    //
    //     // 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
    //     new webpack.DefinePlugin({
    //         __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
    //     })
    // ]
    plugins:[
        // new webpack.DefinePlugin({
        //         "process.env":{
        //             NODE_ENV:"development"
        //         }
        //     })
    ]
}
