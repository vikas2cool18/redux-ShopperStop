export const addItem=(grocery)=> {
    return {
        type: 'ADD_SHOPPING_ITEM', payload: grocery
    }
}

export const removeItem=(id)=> {
    return {
        type: 'REMOVE_SHOPPING_ITEM', payload: id
    }
}