const path = require('path')

function resolvePath(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  // 它支持webPack-dev-server的所有选项
  devServer: {
    host: "0.0.0.0",
    port: 8081, // 端口号
    https: false, // https:{type:Boolean}
    open: false, //配置自动启动浏览器
    proxy: {
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      '/reqapi': {
        target: 'http://192.168.0.136:8085',
        changeOrigin: true,
        pathRewrite: {
          '^/reqapi': ''
        }
      }
    },
  },
  publicPath: process.env.NODE_ENV === "production" ? "/hehuh5/" : "/",
  outputDir: 'hehuh5product',
  productionSourceMap: false,
  configureWebpack: {
    name: '图片压缩管理',
    resolve: {
      alias: {
        '@': resolvePath('src'),
      }
    },
  }
};