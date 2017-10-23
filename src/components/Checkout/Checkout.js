import React, {Component} from 'react';
import Details from '../../ducks/reducer';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

export default class Checkout extends Component {
    onToken = (token) => {
        token.card = void 0;
        axios.post('http://localhost:3010/api/payment', { token, amount: null } ).then(response => {
        });
    }

    render() {
        return(
            <div>
                <StripeCheckout 
                token={this.onToken}
                stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
                />
            </div>
        )
    }
}