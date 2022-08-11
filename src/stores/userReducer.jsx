import React from 'react'
import { clearToken, clearUser, getUser } from '../utils/token'

const initialValue ={
    user: getUser()
}
export const logoutAction = () =>{
    clearToken()
    clearUser()
    return ( {type: 'user/logout'})
}
export default function userReducer(state = initialValue, action) {
    console.log(action.type)
    switch(action.type){
        case 'auth/setUser':
            console.log("set user")
            return{
                ...state,
                user: action.payload
            }
        case 'user/logout':
            return{
                ...state,
                user: null
            }
     }
    return state
}
