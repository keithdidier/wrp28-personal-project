import React, { Component } from 'react'
import rbTShirt from '../../assets/rb-t-shirt-white.jpg';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';


export default class Products extends Component {
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
            <div>
                <h2>Feed</h2>
                {/* <img src={rbTShirt} /> */}
                {this.state.myProducts.map((item, index) => (
                     <div key={index}>
                        <Link to='/details'><span>{item.product_name}</span></Link>
                        <span>{item.price}</span>
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