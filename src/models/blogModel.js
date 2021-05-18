

module.exports = (sequelize, type) =>{
    return sequelize.define('post', {
        id:{
            type:type.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        titulo: type.STRING,
        contenido: type.STRING,
        imagen: type.STRING,
        categoria: type.STRING,
        fecha: type.DATE
    })
}