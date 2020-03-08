export const buyGroceryItem=(id)=> {
    return {
        type: 'BUY_GROCERY_ITEM', payload: id
    }
}

export const returnGroceryItem=(item)=> {
    return {
        type: 'RETURN_GROCERY_ITEM', payload: item
    }
}