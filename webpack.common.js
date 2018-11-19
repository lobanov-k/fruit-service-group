const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = env => {
    const isProduction = env.production;

    return {
        entry: {
            client: './src/client.js',
            bundle: './src/bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ['babel-loader']
                },
                {
                    test: /\.(less|css)$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: ['css-loader', 'less-loader']
                    })
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
            path: __dirname + '/www',
            publicPath: '/',
            filename: 'js/[name].js'
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new CopyWebpackPlugin([
                { from: 'src/images', to:'images' }
            ]),
            new ExtractTextPlugin({
                filename: 'css/[name].css'
            })
        ]
    }
};