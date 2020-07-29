const mongoose = require('mongoose')

const CartItemSchema = mongoose.Schema({

    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    product:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product'
    },
    quantity : {
        type: Number,
        required: true
    },
    date : {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('cartitem',CartItemSchema)