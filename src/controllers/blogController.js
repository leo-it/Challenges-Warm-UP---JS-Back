const router = require('express').Router()

const {
    Blog
} = require("../../db")

router.get('/', async (req, res) => {
    const blog = await Blog.findAll()
    res.json(blog)
}) 
router.get('/:id', async (req, res) => {
    const blog = await Blog.findByPk(req.params.id)
    res.json(blog)
}) 
router.post('/', async (req, res) => {
   const blog = await Blog.create(req.body)
   res.json(blog)
})/*
router.put('/:blogId', async (req, res) => {
    await Film.update(req.body,{
        where:{id: req.params.filmId}
    })
    res.json({succes: "se ha modificado"})
 })
 
 router.delete('/:blogId', async (req, res) => {
    await Film.destroy({
        where: { id: req.params.filmId}
    })
    res.json({succes: "se ha eliminado"})
 })
 */
module.exports = router;