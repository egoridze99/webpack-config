const path = require('path');

module.exports = function () {
    return {
        devServer: {
            overlay: true,
            contentBase: path.join(__dirname, '../'),
            port : 5000,
            stats: 'errors-only',
            compress: true
        }
    }
}