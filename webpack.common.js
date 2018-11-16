const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = env => {
    const isProduction = env.production;
    const pluginsArray = [
        new webpack.HotModuleReplacementPlugin(),
        new CopyWebpackPlugin([
            { from: 'src/images', to:'images' }
        ])
    ];

    if (isProduction) pluginsArray.push(new MiniCssExtractPlugin({
        filename: !isProduction ? '[name].css' : '[name].[hash].css',
        chunkFilename: !isProduction ? '[id].css' : '[id].[hash].css',
    }));

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
            filename: 'js/[name].js'
        },
        plugins: pluginsArray
    }
};