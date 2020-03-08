export const addShoppingStats=(prevArr)=> {
    return {
        type: 'ADD_ITEM', payload: prevArr
    }
}

export const removeShoppingStats=(prevArr)=> {
    return {
        type: 'REMOVE_ITEM', payload: prevArr
    }
}