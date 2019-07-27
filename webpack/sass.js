const autoprefixer = require('autoprefixer');

module.exports = function(paths) {
    return {
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    include: paths,
                    use: [
                        {
                            loader: 'style-loader'
                        },
                        {
                            loader:'css-loader',
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                config : {
                                    path : './src/script/config/postcss.config.js'
                                }
                            }
                        },
                        {
                            loader:'sass-loader'
                        }
                    ]
                }
            ]
        }
    };
};