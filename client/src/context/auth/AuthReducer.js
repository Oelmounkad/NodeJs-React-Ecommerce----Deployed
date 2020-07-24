import {
REGISTER_SUCCESS,
REGISTER_FAIL
} from '../types'

export default (action,state) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
            localStorage.setItem('token',action.payload.token)
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading: false,
                error: null
            }
            case REGISTER_FAIL:
            localStorage.removeItem('token',action.payload.token)
            return {
                ...state,
                token:null,
                isAuthenticated: false,
                loading: false,
                user: null,
                error: action.payload
            }
    
        default:
            return state
    }
}