// @flow

import React from "react";
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Auth from "./Components/Auth/Auth";
import Home from "./Components/Home/Home";
import State from "./Components/Example/State/State";

const routes = {
    authPage: '/auth',
    homePage: '/home',
    examples: {
        state: '/example/state'
    }
};

const Router = () => {
    return <BrowserRouter>
        <Switch>
            <Route path={routes.authPage}>
                <Auth/>
            </Route>
            <Route path={routes.homePage}>
                <Home/>
            </Route>
            <Route path={routes.examples.state}>
                <State/>
            </Route>
            <Route>
                <Redirect to={routes.authPage}/>
            </Route>
        </Switch>
    </BrowserRouter>;
};

export default Router;