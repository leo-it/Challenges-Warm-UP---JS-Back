const router = require('express').Router()

const apiBlogRouter = require('../controllers/blogController')

router.use('/posts', apiBlogRouter)



module.exports= router;