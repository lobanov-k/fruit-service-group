const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common({production: false}), {
   mode: 'development',
   devtool: 'inline-source-map',
   devServer: {
       contentBase: './dist',
       hot: true
   },
   devtool: 'inline-source-map'
 });