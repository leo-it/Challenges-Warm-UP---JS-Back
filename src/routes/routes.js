const router = require('express').Router()

const apiFilmsRouter = require('../controllers/blogController')

router.use('/posts', apiFilmsRouter)



module.exports= router;