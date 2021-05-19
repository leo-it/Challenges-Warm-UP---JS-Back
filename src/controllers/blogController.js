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
})
router.put('/:id', async (req, res) => {
    const blog = await Blog.findByPk(req.params.id)
    if(blog){
    await Blog.update(req.body,{
        where:{id: req.params.id}
    })
    res.json({succes: "se ha modificado"})
}else{
    res.json({succes: "id no encontrado"})

}
 })

 router.delete('/:id', async (req, res) => {
    await Blog.destroy({
        where: { id: req.params.id}
    })
    res.json({succes: "se ha eliminado"})
 })

module.exports = router;