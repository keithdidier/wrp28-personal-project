import React, {Component} from 'react';
import './Checkout.css';
import Details from '../../ducks/reducer';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import checkoutTextField from '../../components/MaterialUI/MaterialUI';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MaterialUI from '../../components/MaterialUI/MaterialUI';

export default class Checkout extends Component {
    onToken = (token) => {
        token.card = void 0;
        axios.post('http://localhost:3010/api/payment', { token, amount: null } ).then(response => {
        });
    }
    

    render() {
        return(
            <div className="checkout-wrapper">
                <h2 className="lead-shipping-details">What are your shipping details?</h2>
                <MuiThemeProvider>    
                    {checkoutTextField()}
                    <div className="stripe-btn">
                        <h2 className="lead-card-checkout">Checkout using Stripe</h2>
                        <div className="stripe-icon"><i class="fa fa-cc-stripe fa-4x" aria-hidden="true"></i></div>
                        <StripeCheckout 
                        token={this.onToken}
                        stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
                        />
                    </div>
                </MuiThemeProvider>    
            </div>
        )
    }
}