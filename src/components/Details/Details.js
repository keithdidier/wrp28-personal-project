import React, {Component} from 'react';
import {getDetails} from '../../ducks/reducer';
import {addToCart} from '../../ducks/reducer';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import './Details.css';

 class Details extends Component {
    constructor() {
        super();

    }

    render() {
        let {image_url, product_name, color, size, price} = this.props.details; 
        return(
            <div className="product-wrapper">
                <img className="details-img" src={image_url}/>
                <h2>Name: {product_name}</h2>
                <h2>Color: {color}</h2>
                <h2>Size: {size}</h2>
                <h2 className="item-price">${price}</h2>
                <button className="add-to-cart" onClick={() => this.props.addToCart(this.props.details)}>Add to Cart</button>
                <Link to="/cart"><button className="view-cart"><span>View Cart</span></button></Link>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {addToCart})(Details);