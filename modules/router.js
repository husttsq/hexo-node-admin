// Dependencies
var express = require('express')
var view = require('./view')

// Router
var router = express.Router()

// Routes
router.get('/', view.index)

router.get('/!', view.dashboard)

router.get('/!post', view.post)

router.get('/!page', view.page)

router.get('/!logout', view.logout)

router.get('/!showpost', view.showPost)

router.get('/!showpage', view.showPage)

router.get('/!generate', view.generate)

router.get('/!deploy', view.deploy)

router.get('/!stats', view.stats)

router.get('/!about', view.about)

router.post('/!new', view.newFile)

router.post('/!save', view.save)

router.post('/!delete', view.deleteFn)

router.post('/!login', view.login)

router.post('/!clean', view.clean)

router.post('/!upload', view.upload)

// Export
module.exports = router