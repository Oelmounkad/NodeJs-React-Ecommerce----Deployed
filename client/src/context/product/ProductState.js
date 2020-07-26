import React,{useReducer} from 'react'
import axios from 'axios'

import ProductContext from './ProductContext'
import ProductReducer from './ProductReducer';

import {
GET_PRODUCTS,
CLEAR_PRODUCTS,
FILTER_PRODUCTS,
CLEAR_FILTER,
PRODUCT_ERROR,
CLEAR_CURRENT,
SET_CURRENT,
ADD_PRODUCT,
UPDATE_PRODUCT

} from '../types'

 const ProductState = props => {

    const initialState = {
        products: [],
        filtered: null,
        current: null
    }

    const [state, dispatch] = useReducer(ProductReducer, initialState)


    // Actions:

    // Get all products
   const getProducts = async () => {
        try {
            const res = await axios.get('/api/products')
            dispatch({
                type: GET_PRODUCTS,
                payload: res.data
            })
        } catch (err) {
            dispatch({
                type: PRODUCT_ERROR,
                payload: err.response.data
            })
        }
   }

     // Add a product
     const addProduct = async data => {
        try {
            const res = await axios.post('/api/products',data)
            dispatch({
                type: ADD_PRODUCT,
                payload: res.data
            })
        } catch (err) {
            dispatch({
                type: PRODUCT_ERROR,
                payload: err.response.data
            })
        }
   }


    // Update a product
    const updateProduct = async product => {
        try {
            const res = await axios.put(`/api/products/${product._id}`,product)
            dispatch({
                type: UPDATE_PRODUCT,
                payload: res.data
            })
        } catch (err) {
            dispatch({
                type: PRODUCT_ERROR,
                payload: err.response.data
            })
        }
   }


   // Set Current Product

   const setCurrent = product => {
    dispatch({type: SET_CURRENT, payload: product})
}

   // Clear Current Product
   const clearCurrent = () => {
    dispatch({type: CLEAR_CURRENT })
}

    return (
        <ProductContext.Provider
        value={{
            products: state.products,
            filtered: state.filtered,
            current: state.current,
            getProducts,
            addProduct,
            updateProduct,
            setCurrent,
            clearCurrent
        }}
        >
            {props.children}
        </ProductContext.Provider>
    )
}
export default ProductState