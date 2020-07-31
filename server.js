const express = require('express')
const connectDB = require('./config/db')
const app = express()
const path = require('path')

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


//Serve static assets in production

if(process.env.NODE_ENV === 'production'){
    //Set static folder
    app.use(express.static('client/build'))

    app.get('*', (req,res) => res.sendFile(path.resolve(__dirname,'client','build','index.html')))
}


app.listen(PORT, () => console.log(`Server started on port : ${PORT}`))