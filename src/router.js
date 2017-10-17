import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';

import Landing from './components/Landing/Landing';
import Cart from './components/Cart/Cart';
import Details from './components/Details/Details';
import Checkout from './components/Checkout/Checkout';

export default(
    <Switch>
        <Route component={Landing} exact path="/" />
        <Route component={Cart} path="/cart" />
        <Route component={Details} path="/details" />
        <Route component={Checkout} path="/checkout" />
    </Switch>
)