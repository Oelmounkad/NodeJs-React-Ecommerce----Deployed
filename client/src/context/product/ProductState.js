import React,{useReducer} from 'react'
import axios from 'axios'

import ProductContext from './ProductContext'
import ProductReducer from './ProductReducer';

import {
GET_PRODUCTS,
CLEAR_PRODUCTS,
FILTER_PRODUCTS,
CLEAR_FILTER,
PRODUCT_ERROR
} from '../types'

 const ProductState = props => {

    const initialState = {
        products: [],
        filtered: null
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


    return (
        <ProductContext.Provider
        value={{
            products: state.products,
            filtered: state.filtered,
            getProducts
        }}
        >
            {props.children}
        </ProductContext.Provider>
    )
}
export default ProductState