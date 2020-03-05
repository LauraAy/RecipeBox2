const router = require('express').Router()

router.use('/api', require('./userRoutes.js'))
router.use('/api', require('./recipeRoutes.js'))
router.use('/api', require('./recipeCreatorRoutes.js'))

module.exports = router