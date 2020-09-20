import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/header/header';
import Home from './pages/Home/home';
import Records from './pages/Records/records';

const Routes = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/records">
                <Records />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;