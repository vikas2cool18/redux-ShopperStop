const shoppingBagInitial=[]

const shoppingBagReducer=(state=shoppingBagInitial, action)=> {
    switch(action.type) {
        case 'ADD_SHOPPING_ITEM' : {
            return [...state, action.payload]
        }
        case 'REMOVE_SHOPPING_ITEM': {
            return state.filter(item=> item.id !== action.payload)
        }
        default: {
            return [...state]
        }
    }
}

export default shoppingBagReducer