import React, {Component} from 'react';
import axios from 'axios';
import {getDetails} from '../../ducks/reducer';
import {addToCart} from '../../ducks/reducer';
import {getUser} from '../../ducks/reducer';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './Details.css';

class Details extends Component {
    constructor() {
        super();

    this.addToCart = this.addToCart.bind(this);     
}

componentDidMount() {
    this.props.getUser()
}

addToCart() {
    this.props.addToCart(this.props.details, this.props.userId)
}

    render() {
        let {image_url, product_name, color, size, price} = this.props.details; 
        return(
            <div className="product-wrapper">
                <img className="details-img" src={image_url}/>
                <div className="item-details">
                    <div className="name-and-price-container">
                        <h2 className="item-title">{product_name}</h2>
                        <h2 className="item-price">${price}</h2>
                    </div>
                    <div className="item-information">
                        <h2 className="item-color">Color,<br/>{color}</h2>
                        <h2 className="item-size">Size,<br/>{size}</h2>
                    </div>
                    <div className="cart-btn-container">
                        <button className="add-to-cart" onClick={this.addToCart}>Add to Cart</button>
                        <Link to="/cart"><button className="view-cart"><span>View Cart</span></button></Link>
                    </div>
                    <section className="product-specs">
                        <h2 className="lead-features">Features</h2>
                        <ul>
                            <li>
                                <p>Plain color t-shirts are 100% Cotton, Heather Grey is 90%<br/> 
                                Cotton/10% Polyester, Charcoal Heather is 52% Cotton/48%<br/>Polyester</p>
                            </li>
                            <li>
                                <p>Ethnically sourced</p>
                            </li>
                            <li>
                                <p>Slim fit, but if that's not your thing, order a size up</p>
                            </li>
                            <li>
                                <p>4.2oz/145g, but if that's too light, try our heavier classic tee</p>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {addToCart, getUser})(Details);