import React from "react";
import {Switch, Route} from "react-router-dom";
import Routes from "./Routes";

const Router: React.FC = () => {
    return (
        <>
            <Switch>
                {
                    Routes.Components.map((v, i) => <Route {...v} key={`route-${i}`}/>)
                }
            </Switch>
        </>
    )
}


export default Router;