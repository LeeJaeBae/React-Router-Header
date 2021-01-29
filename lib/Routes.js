import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

const Routes = ({route}) => <BrowserRouter>
    <Switch>
        {
            route.components.map(v=>{
                return <Route {...v} />
            })
        }
    </Switch>
</BrowserRouter>

export default Routes;

