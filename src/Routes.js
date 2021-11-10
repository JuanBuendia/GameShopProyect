import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from "./pages/login";
import Home from "./pages/home";
import Games from "./pages/components/home";

function Routes () {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/games" component={Games}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;