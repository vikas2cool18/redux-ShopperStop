import React from 'react'
import {connect} from 'react-redux'

function ShoppingStats(props) {
    return (
        <div className="col-md-4 text-center">
            <h2>Shopping Stats</h2>
            <ul class="list-group mb-5">
            <li class="list-group-item">Cost - $ {props.shoppingStats[0]}</li>
            <li class="list-group-item active">Calories - {props.shoppingStats[1]} kcal</li>
            <li class="list-group-item">Weight - {props.shoppingStats[2]} mg</li>
            {/* <li class="list-group-item">My List Item Four</li>
            <li class="list-group-item">My List Item Five</li> */}
        </ul>
        </div>
    )
}

const mapStateToProps=(state)=> {
    return {
        shoppingStats: state.shoppingStats
    }
}

export default connect(mapStateToProps)(ShoppingStats)