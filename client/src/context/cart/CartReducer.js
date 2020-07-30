import {
    GET_CART_ITEMS,
    DELETE_CART_ITEM,
    ADD_CART_ITEM,
    CART_ERROR

} from '../types'



export default (state,action) => {
    switch (action.type){

        case GET_CART_ITEMS:
            return{
                ...state,
                cart: action.payload
            }
        case DELETE_CART_ITEM:
            return{
                ...state,
                cart: state.cart.filter(c => c._id !== action.payload._id)
            }
        case ADD_CART_ITEM:
                return{
                    ...state,
                    cart: [action.payload,...state.cart]
                }
        case CART_ERROR:
            return{
                ...state,
                error: action.payload
            }

    }
}