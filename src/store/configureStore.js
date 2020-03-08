import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import groceryItemsReducer from '../reducers/groceryItems'
import shoppingBagReducer from '../reducers/shoppingBag'
import shoppingStatsReducer from '../reducers/shoppingStats'
import walletMoneyReducer from '../reducers/walletMoney'


const configureStore=()=> {
    const store=createStore(combineReducers({
        groceryItems: groceryItemsReducer,
        shoppingBag: shoppingBagReducer,
        shoppingStats: shoppingStatsReducer,
        walletMoney: walletMoneyReducer
    }), applyMiddleware(thunk))

    return store
}

export default configureStore