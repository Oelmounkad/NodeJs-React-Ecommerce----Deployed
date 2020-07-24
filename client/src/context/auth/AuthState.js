import React,{useReducer} from 'react'
import AuthContext from './AuthContext'
import AuthReducer from './AuthReducer'
import axios from 'axios'


import {
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from '../types'


 const AuthState = props => {
     const initialState = {
        token: localStorage.getItem('token'),
        error: null
     }

     const [state, dispatch] = useReducer(AuthReducer, initialState)

// Actions:

//Register a user

const register = async data => {
    const config = {
        headers: {
            'Content-Type' : 'application/json'
        }
    }
    try {
        const res = await axios.post('/api/users',data,config)
        dispatch({
           type: REGISTER_SUCCESS,
           payload: res.data
        })

    } catch (err) {
        dispatch({
            type: REGISTER_FAIL,
            payload: err.response.data
         })
    }
}




    return (
        <AuthContext.Provider value={{
            token: state.token,
            error: state.error,
            register
        }} >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState