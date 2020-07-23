const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({

    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    name : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    },
    quantity : {
        type: Number,
        required: true
    },
    price : {
        type: Number,
        required: true
    },
    date : {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('product',ProductSchema)