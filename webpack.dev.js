const path = require('path');
const merge = require('webpack-merge');
const webpackCommonConfig = require('./webpack.common.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// change the server path to your server location path
const exoServerPath = "/home/exo/devTools/apache-tomcat-8.5.35/";


let config = merge(webpackCommonConfig, {
    output: {
        path: path.resolve(__dirname, exoServerPath + 'webapps/project/'),
        filename: '[name].bundle.js'
    },
    devtool: 'inline-source-map'
});

config.plugins.push(new CopyWebpackPlugin([{from: 'src/main/webapp/lang/*.json', to: './lang', flatten: true}]));

module.exports = config;