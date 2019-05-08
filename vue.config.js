const path = require('path');

const resolve = dir => {
  return path.join(__dirname, dir);
};

const BASE_URL = process.env.NODE_ENV === 'production' ? '/' : '/';

module.exports = {
  baseUrl: BASE_URL,

  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'));
  },
  devServer: {
    port: 8081, // 端口号
    host: '0.0.0.0',
    open: true, //配置自动启动浏览器
    https: false // https:{type:Boolean}
  }
};
