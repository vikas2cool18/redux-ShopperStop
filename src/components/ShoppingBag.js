import React from 'react'
import {connect} from 'react-redux'
import {removeItem} from '../actions/shoppingBag'
import {returnGroceryItem} from '../actions/groceryItems'
import {addMoney} from '../actions/walletMoney'
import {removeShoppingStats} from '../actions/shoppingStats'

function ShoppingBag(props) {

    const removeItemGroceryFromShoppingBag=(groceryItem)=>{
        props.dispatch(removeItem(groceryItem.id))
        props.dispatch(returnGroceryItem(groceryItem))
        props.dispatch(addMoney(groceryItem.cost))
        props.dispatch(removeShoppingStats([groceryItem.cost, groceryItem.calories, groceryItem.weight]))

    }

    return (
        <div className="col-md-4 text-center">
            <h2>Shopping Bag</h2>
            <ul class="list-group mb-5">
                {props.shoppingBag.map((groceryItem)=> {
                     return<li key={groceryItem.id} class="list-group-item" onClick={()=> {
                        removeItemGroceryFromShoppingBag(groceryItem)}}>{groceryItem.name} - ${groceryItem.cost}- {groceryItem.calories}cal - {groceryItem.weight}mg</li>
       
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
        shoppingBag: state.shoppingBag,
        groceryItems:state.groceryItems
    }
}

export default connect(mapStateToProps)(ShoppingBag)