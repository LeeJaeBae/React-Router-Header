import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

const Routes = ({route}) => <BrowserRouter>
    <Switch>
        {
            route.prototype.components.map(v=>{
                return <Route {...v} key={v.id} />
            })
        }
    </Switch>
</BrowserRouter>

export default Routes;

