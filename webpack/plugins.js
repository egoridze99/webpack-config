const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function() {
    return {
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'css/[name].css',
                chunkFilename: 'css/[id].css',
                ignoreOrder: false
            })
        ]
    }
}