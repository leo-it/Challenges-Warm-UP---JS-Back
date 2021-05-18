const Sequelize = require('sequelize')
const BlogModel = require('./src/models/blogModel')

const sequelize = new Sequelize('gJpXyyDnyL','gJpXyyDnyL','EFq71d9NEg',{
    host:'remotemysql.com',
    dialect:'mysql'
})

const Blog = BlogModel(sequelize, Sequelize)


sequelize.sync({ force: false})
.then(()=>{
    console.log('Tablas sql sincronizadas');
})


module.exports= {
    Blog
}