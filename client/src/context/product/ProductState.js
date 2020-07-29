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
UPDATE_PRODUCT,
DELETE_PRODUCT,
GET_ALL_PRODUCTS

} from '../types'

 const ProductState = props => {

    const initialState = {
        allProducts: null,
        products: null,
        filtered: null,
        current: null,
        error: null,
        loading: true
    }

    const [state, dispatch] = useReducer(ProductReducer, initialState)


    // Actions:


    // Get all products
   const getAllProducts = async () => {
    try {
        const res = await axios.get('/api/products/all')
        dispatch({
            type: GET_ALL_PRODUCTS,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: PRODUCT_ERROR,
            payload: err.response.data
        })
    }
}

    // Get all user's products
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

 // Delete a product
    const deleteProduct = async id => {
        try {
            const res = await axios.delete(`/api/products/${id}`)
            dispatch({
                type: DELETE_PRODUCT,
                payload: id
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

// Clear products

const clearProducts = () => {
    dispatch({
        type: CLEAR_PRODUCTS
    })
}

    return (
        <ProductContext.Provider
        value={{
            allProducts: state.allProducts,
            products: state.products,
            filtered: state.filtered,
            current: state.current,
            error: state.error,
            loading: state.loading,
            getAllProducts,
            getProducts,
            addProduct,
            updateProduct,
            deleteProduct,
            clearProducts,
            setCurrent,
            clearCurrent
        }}
        >
            {props.children}
        </ProductContext.Provider>
    )
}
export default ProductState