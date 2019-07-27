const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = function() {
    return {
        optimization: {
            minimizer: [new TerserPlugin({}), new OptimizeCssAssetsPlugin({
                cssProcessorPluginOptions: {
                    preset: ['default', { discardComments: { removeAll: true } }],
                },
                canPrint: true
            })]
        }
    }
}