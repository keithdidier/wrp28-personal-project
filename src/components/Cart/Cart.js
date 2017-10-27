import React, {Component} from 'react';
import './Cart.css';
import {addToCart} from '../../ducks/reducer';
import {getDetails} from '../../ducks/reducer';
import {getItemsInCart} from '../../ducks/reducer';
import {removeFromCart} from '../../ducks/reducer';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import emptyCart from '../../assets/empty-cart.gif';

class Cart extends Component {
    constructor() {
        super();

        this.state = {
            emptyCart: ""
        }
    }

    componentDidMount() { 
        this.props.getItemsInCart(this.props.userId)
    }

    render() {
        return(
            <div className="cart-wrapper">
                <h2 className="lead-cart">Your shopping cart</h2>
                <div>
                    {/* {!this.props.productsInCart ?  */}
                    <div>
                    {/* <img className="sad-cart" src={emptyCart} /> */}
                    </div>
                    {/* : null } */}
                </div>
                {this.props.productsInCart.map((item, index) => (
                    <div key={index}>
                        <img className="details-img-cart" src={item.image_url}/>
                        <div className="item-details-cart">
                            {/* <h2 className="item-title-cart">{item.product_name}</h2> */}
                            <div className="item-details-cart-h2">
                                <h2 className="item-size-cart">{item.size},</h2>
                                <h2 className="item-color-cart">{item.color}</h2>
                                <h2 className="item-price-cart">${item.price}</h2>
                            </div>
                            <span className="delete-icon" 
                            onClick={() =>{this.props.removeFromCart(item.cart_id, this.props.userId)}}>
                            <i className="fa fa-times-circle fa-lg" aria-hidden="true"></i></span>
                        </div>
                    </div>
                ))
                }
                <div className="checkout-btn-container">
                    <Link to='/checkout'><button className="go-to-checkout"><span>Proceed to checkout</span></button></Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {addToCart, getDetails, getItemsInCart, removeFromCart})(Cart);