const reducer = (state = 0,action) =>{
    switch (action.type){
        case 'increment':
           return state + 1
        case 'decrement':
            return state - 1
        case 'init':
            state = 0
            return state
         default:   
            return state
    }

}
export default reducer
