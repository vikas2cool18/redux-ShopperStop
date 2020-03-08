import React from 'react'
import {connect} from 'react-redux'


function Jumbotron(props) {
    return (
        <div>
            <div class="jumbotron text-center">
                 <h1 class="display-4">Shoppers Stop</h1>
                     <p class="lead">Welcome to the best online shopping website</p>      
            </div>
            <div className="col-md-12 text-center">
                <h1>You have ${props.walletMoney} to spend on Grocery Today</h1>
            </div>
        </div>
    )
}

const mapStateToProps=(state)=> {
    return {
        walletMoney: state.walletMoney
    }
}

export default connect(mapStateToProps)(Jumbotron)