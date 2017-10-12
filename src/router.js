import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';

import Landing from './components/Landing/Landing';


export default(
    <Switch>
        <Route component={Landing} exact path="/" />
    </Switch>
)