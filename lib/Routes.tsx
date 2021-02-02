import React from "react";
import {BrowserRouter, HashRouter} from "react-router-dom";
import Router from "./Router";
import {RoutesComponent} from "./RoutesComponent";
import DefaultRouter from "./DefaultRouter";


class Routes {
    static Router: React.FC<{}> = DefaultRouter;

    static Components: RoutesComponent[];

    constructor(routerSetting: string) {
        if (routerSetting === "hash") {
            Routes.Router = () => {
                return <HashRouter>
                    <Router/>
                </HashRouter>
            }
        } else {
            Routes.Router = () => {
                return <BrowserRouter>
                    <Router/>
                </BrowserRouter>;
            }
        }
    }

    static add = (Component: React.FC | React.Component, path: string, name: string, exact: boolean = false) => {
        const component: RoutesComponent = new RoutesComponent(Component, path, name, exact);
        Routes.Components.push(component);
    }
}

export default Routes;