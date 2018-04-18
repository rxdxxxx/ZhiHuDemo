const Koa = require('koa')
const webpack = require('webpack')
const koaWebpack = require('koa-webpack')
const proxy = require('http-proxy-middleware')
const c2k = require('koa2-connect')
const log = require('typelog')

const webpackConfig = require('./webpack/webpack.config.dev')

let PORT = 5001
const compiler = webpack(webpackConfig)

const app = new Koa()

app.use(c2k(proxy('/download', {
  target: 'http://127.0.0.1:3005',
  changeOrigin: true
})))

app.use(koaWebpack({
  compiler,
  dev: {
    hot: true,
    publicPath: '/'
  }
}))

app.listen(PORT)
log.info(`Webpack dev server is on http://127.0.0.1:${PORT} `)

