import React, {Component} from 'react';

export default class Details extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div className="product-wrapper">
                <h2>Product name</h2>
                <h2>Color</h2>
                <h2>Size</h2>
                <h2>Price</h2>
                <button>Add to Cart</button>
            </div>
        )
    }
}