const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin  = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin'); 

module.exports = function() {
    return {
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'css/[name].css',
                chunkFilename: 'css/[id].css',
                ignoreOrder: false
            }),
            new HtmlWebpackPlugin({
                hash: false,
                template: './index.html',
                filename: 'index.html',
                inject: false
            }),
            new CopyWebpackPlugin([
                { from: './src/assets/img', to: 'images' }
            ])
        ]
    }
}
