const {name} = require('./package.json');
module.exports = {
  devServer: {
    port: '6060',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  publicPath: './',
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
}
