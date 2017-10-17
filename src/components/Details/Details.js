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
                <h2>{product_name}</h2>
                <h2>{color}</h2>
                <h2>{size}</h2>
                <h2>{price}</h2>
                <button onClick={() => this.props.addToCart(this.props.details)}>Add to Cart</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {addToCart})(Details);