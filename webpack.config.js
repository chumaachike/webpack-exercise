const path = require ('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    entry:{
        index: path.resolve(__dirname, './src/index.js')
    },
    output:{
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js'
    },
    devtool:'inline-source-map',
    devServer:{
        static: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin ({
            title: 'Development',
            template: path.resolve(__dirname, './src/template.html')
        })
    ],
    module:{
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
            test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
            type: 'asset/resource'
            }
        ]
    }, 
    optimization: {
        runtimeChunk: 'single',
    }

}