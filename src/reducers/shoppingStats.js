const initialShoppingStats=[0,0,0]
   
const shoppingStatsReducer=(state=initialShoppingStats, action)=> {
    switch(action.type) {
        case 'ADD_ITEM' : {
            return state.map((item, index)=> item + action.payload[index])
        }
        case 'REMOVE_ITEM' : {
            return state.map((item, index)=> item - action.payload[index])
        }
        default: {
            return [...state]
        }
    }
}

export default shoppingStatsReducer