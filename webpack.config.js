const path = require('path');
const merge = require ('webpack-merge');

const devConfig = require('./webpack/devserver');
const sass = require('./webpack/sass');
const css = require('./webpack/css');
const extract = require('./webpack/css.extract');
const plugins = require('./webpack/plugins');
const optimization = require('./webpack/optimization');
const babel = require('./webpack/babel');
const fileLoader = require('./webpack/file-loader');
const typeScript = require('./webpack/typescript');

const PATHS = {
    src : path.join(__dirname, 'src/script'),
    build : path.join(__dirname, 'dist')
};

const common = merge([
    {
        entry : {
        app : PATHS.src + '/index.ts', // index.js / index.ts
        }
    },
    {
        output: {
            path: PATHS.build,
            filename : 'js/[name].js',
            publicPath: '/dist'
        }
    },
    fileLoader(),
    // babel(),
    typeScript(),
    plugins()
])

module.exports = function(env) {
    if (env === 'production') {
        return merge([
            common,
            extract(),
            optimization(),
        ])
    };
    if (env === 'development') {
        return merge([
           common,
           devConfig() ,
           sass(),
           css()
        ])
    }
};
