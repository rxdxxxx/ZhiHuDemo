const router = require('koa-router')()

const json = require('./json')

router.use('/topics', json.allowedMethods(), json.routes())

module.exports = router
