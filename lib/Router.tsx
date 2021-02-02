import React from "react";
import {Switch, Route} from "react-router-dom";
import Routes from "./Routes";

const Router: React.FC = () => {
    return (
        <>
            <Switch>
                {Routes.Components.map((C, i) => {
                    return <Route {...C} key={i}/>
                })}
            </Switch>
        </>
    )
}

export default Router;