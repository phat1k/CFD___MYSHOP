import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import OpenCardReducer from './openReducer';
import authReducer from "./authReducer"
import userReducer from  "./userReducer"
import thunk from "redux-thunk"

// const conposeEnhencers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose
// const reducer = combineReducers({
//     OpenReducer: OpenCardReducer,
//     Auth: AuthReducer
// })''
// const logging =(store)=>{
//     return(next)=>{
//         return (action) =>{
//             console.log("action")
//             next(action)
//         }
//     }
// }
const thunkk = store => next => action =>{
    if(typeof action === 'function'){
        action(store.dispatch)
        return
    }
    // next(action)
}
// const store = createStore(
//     reducer,
//     applyMiddleware(thunk),

// )
export let store = createStore(combineReducers({
        OpenReducer: OpenCardReducer,
        Auth: authReducer,
        UserRe: userReducer
    }),
    applyMiddleware(
        // logging,
        thunkk
        )

)
// compose(
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENTION__(window.__REDUX_DEVTOOLS_EXTENSION__ )
    // )

// export default store