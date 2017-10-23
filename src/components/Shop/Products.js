import React, { Component } from 'react'
import rbTShirt from '../../assets/rb-t-shirt-white.jpg';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {getDetails} from '../../ducks/reducer';
import { connect } from 'react-redux';
import './Products.css';


class Products extends Component {
    constructor(props) {
        super(props);

        this.state = {
            myProducts: []
            // productName: "",
            // productPrice: null
        }
    }



    componentDidMount() {
        axios.get('/api/products').then(res => {

            this.setState({
                myProducts: res.data
            })
        })
    }

    render() {
        return (
            <div className="products-feed-wrapper">
                <h2 className="feed">Feed</h2>
                    <section className="list-of-products">
                        {this.state.myProducts.map((item, index) => (
                            <div className="product-container" key={index}>
                                <Link to='/details' onClick={() => 
                                this.props.getDetails(item.product_id)}>
                                <img className="product-img" src={item.image_url} />
                                <h5 id="product-name">{item.product_name}</h5></Link>
                                <h5 id="product-price">${item.price}</h5>
                            </div>
                        ))
                        }
                    </section>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {getDetails})(Products);