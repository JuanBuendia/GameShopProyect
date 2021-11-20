import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from "./pages/login";
import Games from "./pages/components/Games";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComponent from "./pages/components/Nav/NavComponent";
import GameSearch from "./pages/components/GamesSearch"
import GameDetail from "./pages/components/GameDetail"
import NavComponentAd from "./pages/components/Nav/NavComponentAd";

function Routes () {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route exact path="/home" component={NavComponent}/>
                <Route exact path="/homeAd" component={NavComponentAd}/>
                <Route exact path="/games" component={Games}/>
                <Route exact path="/gameSearch" component={GameSearch}/>
                <Route exact path="/gameDetail" component={GameDetail}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
