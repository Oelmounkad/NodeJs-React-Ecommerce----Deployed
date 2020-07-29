import {
GET_PRODUCTS,
CLEAR_PRODUCTS,
PRODUCT_ERROR,
ADD_PRODUCT,
SET_CURRENT,
CLEAR_CURRENT,
UPDATE_PRODUCT,
DELETE_PRODUCT,
GET_ALL_PRODUCTS
} from '../types'

export default (state,action) => {

    switch(action.type){
        case CLEAR_PRODUCTS:
                  return {
                      ...state,
                      products: []
                  }
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                allProducts: action.payload,
                loading: false
            }
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                loading: false
            }
            case ADD_PRODUCT:
            return {
                ...state,
                products: [ action.payload,...state.products],
                error: null
            }
            case UPDATE_PRODUCT:
                return {
                    ...state,
                    products: state.products.map(prod => prod._id === action.payload._id ? prod = action.payload : prod = prod)
                }
            case DELETE_PRODUCT:
                return {
                    ...state,
                    products: state.products.filter(prod => prod._id !== action.payload)
                }
            case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            }
            case CLEAR_CURRENT:
                return {
                    ...state,
                    current: null
                }
            case PRODUCT_ERROR:
                  return {
                      ...state,
                      error: action.payload,
                      loading: false
                  }
                  
        default:
            return state
    }
}
