export const addMoney=(amount)=> {
    return {
        type: 'ADD', payload: amount
    }
}

export const removeMoney=(amount)=> {
    return {
        type: 'REMOVE', payload: amount
    }
}
