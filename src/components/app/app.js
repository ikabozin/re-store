import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './app.css';

import {withBookstoreService} from '../hoc'
import {CartPage, HomePage} from "../pages";
import ShopHeader from "../shop-header";

const App = () => {
    return (
        <main role="main" className="container">
          <ShopHeader numItems={5} total={210} />
          <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/cart" component={CartPage} />
          </Switch>
        </main>
    );
};

export default withBookstoreService()(App);
