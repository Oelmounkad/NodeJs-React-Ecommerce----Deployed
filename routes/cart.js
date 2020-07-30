const express = require('express')
const router = express.Router()

const auth = require('../middleware/auth')

const CartItem = require('../models/CartItem') 


// @route GET /api/cart
// @desc Get all the items in the user's cart
// @access Private

router.get('/', auth , async (req,res) => {
    try {
         const cartitems = await CartItem.find({user: req.user.id})
         .populate([{path: 'product',select: 'name price'}])
        
         res.json(cartitems)
    } catch (err) {
         res.status(500).send('Server Error')
    } 
})



// @route GET /api/cart
// @desc Get all the items in the user's cart
// @access Private

router.get('/:id', async (req,res) => {
     try {
          const cartitem = await CartItem.findById(req.params.id)
         
          res.json(cartitem)
     } catch (err) {
          res.status(500).send('Server Error')
     } 
 })


// @route   POST api/cart
// @desc    Add a cart item for a user
// @access  Private

router.post('/',auth, async (req,res) => {
    try {
         const {product_id,quantity} = req.body

         const newCartItem = new CartItem({
             user: req.user.id,
             product: product_id,
             quantity
         })

         const cartItem = await newCartItem.save()

         res.json(cartItem)

    } catch (err) {
         res.status(500).send('Server Error')
    } 
})




module.exports = router