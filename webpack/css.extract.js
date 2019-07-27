const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function(paths) {
    return {
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: [
                            {
                                loader: MiniCssExtractPlugin.loader,
                                options: {
                                    publicPath: '../'
                                }
                        },
                        'css-loader',
                        'sass-loader'
                    ]
                },
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                publicPath: '../'
                            }
                        },
                        'css-loader'
                    ]
                }
            ]
        }
    }
}