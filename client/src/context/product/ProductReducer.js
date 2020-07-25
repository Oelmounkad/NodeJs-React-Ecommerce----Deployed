import {
GET_PRODUCTS,
CLEAR_PRODUCTS,
PRODUCT_ERROR
} from '../types'

export default (state,action) => {

    switch(action.type){
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        default:
            return state
    }
}
