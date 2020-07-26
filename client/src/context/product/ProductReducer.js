import {
GET_PRODUCTS,
CLEAR_PRODUCTS,
PRODUCT_ERROR,
ADD_PRODUCT,
SET_CURRENT,
CLEAR_CURRENT,
UPDATE_PRODUCT
} from '../types'

export default (state,action) => {

    switch(action.type){
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
            case ADD_PRODUCT:
            return {
                ...state,
                products: [ action.payload,...state.products]
            }
            case UPDATE_PRODUCT:
                return {
                    ...state,
                    products: state.products.map(prod => prod._id === action.payload._id ? prod = action.payload : prod = prod)
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
        default:
            return state
    }
}
