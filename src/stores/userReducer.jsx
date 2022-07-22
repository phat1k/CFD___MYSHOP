import React from 'react'
import { clearToken, clearUser, getUser } from '../utils/token'

const initialValue ={
    user: getUser()
}
export const logoutAction = () =>{
    console.log("adsjgasdgsssssssssssss")
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
            console.log("ẻtwẻtywẻ")
            return{
                ...state,
                user: null
            }
     }
    return state
}
