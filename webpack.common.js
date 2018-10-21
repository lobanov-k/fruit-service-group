const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';
const pluginsArray = [
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
        { from: 'src/images', to:'images' }
    ])
];

if (isProduction) pluginsArray.push(new MiniCssExtractPlugin());


module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(less|css)$/,
                use: [
                    {
                        loader: isProduction ? MiniCssExtractPlugin.loader : 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'less-loader'
                    }
                ]
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
            },
            { 
                test: /font.*\.(eot|ttf|svg)$/, 
                loader: 'url-loader'
            },
            {
                test: /\.gif/,
                loader: 'url-loader'
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: pluginsArray
};