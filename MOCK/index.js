const Koa = require('koa')
const log = require('typelog')
const logger = require('koa-logger')
const bodyParser = require('koa-bodyparser')
const port = 3005

const api = require('./api')
const app = new Koa()

app.use(logger())
app.use(bodyParser())



app
  .use(api.allowedMethods())
  .use(api.routes())


app.listen(port)
log.info(`Mock api server is on http://127.0.0.1:${port}`)
