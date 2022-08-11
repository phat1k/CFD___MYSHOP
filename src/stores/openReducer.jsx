const initialValue = {
    visible: true,
}
 function OpenCardReducer(state =  initialValue, action){
    switch(action.type){
        case 'OPEN_CARD':
            console.log("vào đây rồi ")
            return{
                
                ...state,
                visible: true
            }
        case 'CLOSE_CARD':
            console.log("vào đây rồi ")
            return{
                ...state,
                visible: false
            }
     }
    return state
} 
export default OpenCardReducer