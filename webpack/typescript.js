const path = require('path');

module.exports = function() {
    return {
        module: {
            rules: [
              {
                test: /\.(tsx|ts)?$/,
                use: 'ts-loader',
                exclude: /node_modules/
              }
            ]
          },
          resolve: {
            extensions: [ '.tsx', '.ts', '.js' ]
          }
    }
}