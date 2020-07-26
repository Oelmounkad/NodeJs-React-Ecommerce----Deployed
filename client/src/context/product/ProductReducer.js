import {
GET_PRODUCTS,
CLEAR_PRODUCTS,
PRODUCT_ERROR,
ADD_PRODUCT
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
        default:
            return state
    }
}
