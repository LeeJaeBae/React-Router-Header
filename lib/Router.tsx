import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Routes from "./Routes";

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                {Routes.Components.map((C, i) => {
                    return <Route {...C} key={i}/>
                })}
            </Switch>
        </BrowserRouter>
    )
}

export default Router;