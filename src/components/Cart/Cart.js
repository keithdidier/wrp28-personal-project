import React, {Component} from 'react';
import {addToCart} from '../../ducks/reducer';
import {getDetails} from '../../ducks/reducer';
import {getItemsInCart} from '../../ducks/reducer';
import {connect} from 'react-redux';
import './Cart.css';
import emptyCart from '../../assets/empty-cart.gif';

class Cart extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div className="cart-wrapper">
                <h2>Your shopping cart</h2>
                <p>Nothing in cart</p>
                <img src={emptyCart} />
                {this.props.productsInCart.map((item, index) => (
                    <div key={index}>
                        <img className="details-img" src={item.image_url}/>
                        <h2>Name: {item.product_name}</h2>
                        <h2>Color: {item.color}</h2>
                        <h2>Size: {item.size}</h2>
                        <h2 className="item-price">${item.price}</h2>
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