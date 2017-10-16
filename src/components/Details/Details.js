import React, {Component} from 'react';
import {getDetails} from '../../ducks/reducer';
import {connect} from 'react-redux';

 class Details extends Component {
    constructor() {
        super();

    }

    render() {
        let {product_name, color, size, price} = this.props.details; 
        return(
            <div className="product-wrapper">
                <h2>{product_name}</h2>
                <h2>{color}</h2>
                <h2>{size}</h2>
                <h2>{price}</h2>
                <button>Add to Cart</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(Details);