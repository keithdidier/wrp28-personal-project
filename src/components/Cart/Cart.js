import React, {Component} from 'react';
import {addToCart} from '../../ducks/reducer';
import {getDetails} from '../../ducks/reducer'
import {connect} from 'react-redux';
import './Cart.css';

class Cart extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div className="cart-wrapper">
                <h2>Your shopping cart</h2>
                {this.props.productsInCart.map((item, index) => (
                    <div key={index}>
                        <img className="details-img" src={item.image_url}/>
                        <h2>{item.product_name}</h2>
                        <h2>{item.color}</h2>
                        <h2>{item.size}</h2>
                        <h2>{item.price}</h2>
                    </div>
                ))
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {addToCart, getDetails})(Cart);