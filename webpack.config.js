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


const PATHS = {
    src : path.join(__dirname, 'src/script'),
    build : path.join(__dirname, 'dist')
};

const common = merge([
    {
        entry : {
        app : PATHS.src + '/index.js',
        }
    },
    {
        output: {
            path: PATHS.build,
            filename : 'js/[name].js',
            publicPath: '/dist'
        }
    },
    babel(),
    fileLoader(),
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
