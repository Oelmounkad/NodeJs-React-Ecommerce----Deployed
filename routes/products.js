const express = require('express')
const router = express.Router()

const auth = require('../middleware/auth')

const Product = require('../models/Product') 
const { update } = require('../models/Product')


// @route   GET api/products
// @desc    Get all products in the Database
// @access  Private

router.get('/all', async (req,res) => {
     try {
          const products = await Product.find().populate({path:'user',select:'name'})
          res.json(products)
     } catch (err) {
          res.status(500).send('Server Error')
     } 
 })


// @route   GET api/products
// @desc    Get Product by id
// @access  Private

router.get('/:id', async (req,res) => {
     try {
          const product = await Product.findById(req.params.id).populate({path:'user',select:'name'})
          if(!product) return res.status(404).send('Not found')
          res.json(product)
     } catch (err) {
          res.status(500).send('Server Error')
     } 
 })

// @route   GET api/products
// @desc    Get all the users products
// @access  Private

router.get('/',auth, async (req,res) => {
    try {
         let products = await Product.find({user: req.user.id})
         if(products.length === 0){
              return res.status(404).send('You have no Products !')
         } else{
          res.json(products)
         }
         
    } catch (err) {
         res.status(500).send('Server Error')
    } 
})

// @route   POST api/products
// @desc    Add a product for a user
// @access  Private

router.post('/',auth, async (req,res) => {
    try {
         const {name,description,quantity,price} = req.body

         const product = new Product({
             user: req.user.id,
             name,
             description,
             quantity,
             price
         })

         const p = await product.save()

         res.json(p)

    } catch (err) {
         res.status(500).send('Server Error')
    } 
})




// @route   PUT api/products/:id
// @desc    Update a product
// @access  Private

router.put('/:id',auth, async (req,res) => {

    const {name,description,quantity,price} = req.body

    // Build the product object

    const updatedProduct = {}
    if(name) updatedProduct.name = name
    if(description) updatedProduct.description = description
    if(quantity) updatedProduct.quantity = quantity
    if(price) updatedProduct.price = price

    try {

         let product = await Product.findById(req.params.id)

         // Check if the products exists in the database
         if(!product) 
                return res.status(404).send('Product not found !')

        // Check if user owns the product
         if(product.user.toString() !== req.user.id) 
                return res.status(401).json({msg:'Not authorized !'})
                
        // Delete the product
         product = await Product.findByIdAndUpdate(req.params.id,
            {$set : updatedProduct},
            {new: true})

         res.json(product)

    } catch (err) {
         res.status(500).send('Server Error')
    } 
})




// @route   DELETE api/products/:id
// @desc    Delete a product
// @access  Private

router.delete('/:id',auth, async (req,res) => {
    try {

         const product = await Product.findById(req.params.id)

         // Check if the products exists in the database
         if(!product) 
                return res.status(404).send('Product not found !')

        // Check if user owns the product
         if(product.user.toString() !== req.user.id) 
                return res.status(401).json({msg:'Not authorized !'})

        // Delete the product
         await Product.findByIdAndDelete(req.params.id)
         res.json({msg: 'Product deleted !'})

    } catch (err) {
         res.status(500).send('Server Error')
    } 
})









module.exports = router;