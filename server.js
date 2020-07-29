const express = require('express')
const connectDB = require('./config/db')
const app = express()
//const path = require('path')

//Connect DB
connectDB()

// PORT
const PORT = process.env.PORT || 5000 

//Init Middleware
app.use(express.json({extended:true}))

// Routes:

// Users (Login / Register) and Authentication
app.use('/api/users',require('./routes/users'))
app.use('/api/auth',require('./routes/auth'))

// Products
app.use('/api/products',require('./routes/products'))


// cart
app.use('/api/cart',require('./routes/cart'))

app.listen(PORT, () => console.log(`Server started on port : ${PORT}`))