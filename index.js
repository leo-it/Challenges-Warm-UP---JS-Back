const express = require('express')
const bodyparser = require('body-parser')
const cors = require("cors")
const apiRouter = require('./src/routes/routes')
const app = express()

require('./db')

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))



app.use('/api', apiRouter)
app.use(cors());



app.listen(3000, ()=>{
    console.log("app corriendo en puerto 3000");
})