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
import PropsParent from "./Components/Example/Props/PropsParent";
import Hooks from "./Components/Example/Hooks/Hooks";

const routes = {
    authPage: '/auth',
    homePage: '/home',
    examples: {
        state: '/example/state',
        props: '/example/props',
        hooks: '/example/hooks'
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
            <Route path={routes.examples.props}>
                <PropsParent/>
            </Route>
            <Route path={routes.examples.hooks}>
                <Hooks/>
            </Route>
            <Route>
                <Redirect to={routes.authPage}/>
            </Route>
        </Switch>
    </BrowserRouter>;
};

export default Router;