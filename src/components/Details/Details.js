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
                <div className="item-details">
                    <div className="name-and-price-container">
                        <h2 className="item-title">{product_name}</h2>
                        <h2 className="item-price">${price}</h2>
                    </div>
                    <h2 className="item-information">Color
                        <h2 className="item-color">{color}</h2></h2>
                    <h2 className="item-information">Size
                        <h2 className="item-size">{size}</h2></h2>
                    <button className="add-to-cart" onClick={() => this.props.addToCart(this.props.details)}>Add to Cart</button>
                    <Link to="/cart"><button className="view-cart"><span>View Cart</span></button></Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {addToCart})(Details);