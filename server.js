////import dependencies
const express = require('express')
require('dotenv').config()
const path = require('path')
// const middleware = require('./utils/middleware')



const userRouter = require('./controllers/userController')




//////create app object
const app = express()
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');




////middle ware
// middleware(app)


////ROUTES
app.use('/', userRouter)



////server listener
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log('server working')
})


//////