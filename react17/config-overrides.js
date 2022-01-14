const {name} = require('./package.json');

module.exports = {
  webpack: (config) => {
    /*config.entry = config.entry.filter(
      (e) => !e.includes('webpackHotDevClient')
    );*/

    config.output.library = `${name}-[name]`;
    config.output.libraryTarget = 'umd';
    // config.output.jsonpFunction = `webpackJsonp_${name}`;
    config.output.chunkLoadingGlobal = `webpackJsonp_${name}`; // 已变更
    config.output.globalObject = 'window';

    return config;
  },

  devServer: (configFunction) => {
    return function (proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);
      config.hot = false;
      config.headers = {
        'Access-Control-Allow-Origin': '*',
      };

      return config;
    };
  },
};
