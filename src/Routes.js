import React from "react";
import {HashRouter, Switch, Route} from 'react-router-dom';
import Login from "./pages/login";

function Routes () {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Login}/>
            </Switch>
        </HashRouter>
    );
}

export default Routes;