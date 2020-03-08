const initialWalletMoney=50

const walletMoneyReducer=(state=initialWalletMoney, action)=> {
    switch(action.type) {
        case 'ADD' : {
            return state + action.payload
        }
        case 'REMOVE' : {
            return state - action.payload
        }
        default: {
            return state
        }
    }
}

export default walletMoneyReducer