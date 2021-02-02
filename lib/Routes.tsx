import React from "react";
import {BrowserRouter, HashRouter} from "react-router-dom";
import Router from "./Router";
import {RouteComponent} from "./RouteComponent";
import {RoutesComponent} from "./Routes.d";

class Routes {
    static Router: React.FC<{}> = Router;

    static Components: RoutesComponent[];

    constructor(routerSetting: string) {
        if (routerSetting === "hash") {
            Routes.Router = () => {
                return <HashRouter>
                </HashRouter>
            }
        } else {
            Routes.Router = () => {
                return <BrowserRouter>
                </BrowserRouter>;
            }
        }
    }

    static add = (Component: React.FC | React.Component, path: string, name: string, exact: boolean = false) => {
        const component: RouteComponent = new RouteComponent(Component, path, name, exact);
        Routes.Components.push(component);
    }
}

export default Routes;