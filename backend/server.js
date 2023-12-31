const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT||5000
const{errorHandler}=require("./middleware/errors.js")
const connectDB= require('./config/db.js')
const colors = require('colors')

connectDB()   

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/goals',require('./routes/goalRoutes.js'))

//app.use(errorHandler)

// listen for requests
app.listen(port, () => console.log(`Server started on ${port}`))