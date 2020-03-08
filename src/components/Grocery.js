import React from 'react'
import {connect} from 'react-redux'
import {buyGroceryItem} from '../actions/groceryItems'
import {addItem} from '../actions/shoppingBag'
import {removeMoney} from '../actions/walletMoney'
import {addShoppingStats} from '../actions/shoppingStats'

function Grocery(props) {

    const removeItemGrocery=(groceryItem)=> {
        props.dispatch(buyGroceryItem(groceryItem.id))
        props.dispatch(addItem(groceryItem))
        props.dispatch(removeMoney(groceryItem.cost))
        props.dispatch(addShoppingStats([groceryItem.cost, groceryItem.calories, groceryItem.weight]))
    }

    return (
        <div className="col-md-4 text-center">
            <h2>Grocery Items</h2>
            <ul class="list-group mb-5">
                {props.groceryItems.map(groceryItem=> {
                    return<li key={groceryItem.id} class="list-group-item" onClick={()=> {
                        removeItemGrocery(groceryItem)}}>{groceryItem.name} - ${groceryItem.cost}- {groceryItem.calories}cal - {groceryItem.weight}mg</li>
                })}
            
            {/* <li class="list-group-item active">My List Item Two</li>
            <li class="list-group-item">My List Item Three</li>
            <li class="list-group-item">My List Item Four</li>
            <li class="list-group-item">My List Item Five</li> */}
        </ul>
        </div>
    )
}

const mapStateToProps=(state)=> {
    return {
        groceryItems:state.groceryItems/* ,
        shoppingBag: state.shoppingBag,
        shoppingStats: state.shoppingStats,
        walletMoney: state.walletMoney */
    }
}

export default connect(mapStateToProps)(Grocery)