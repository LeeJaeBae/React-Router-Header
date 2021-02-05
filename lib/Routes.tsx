import React from "react";
import {BrowserRouter, HashRouter} from "react-router-dom";
import Router from "./Router";
import {RoutesComponent} from "./RoutesComponent";
import DefaultRouter from "./DefaultRouter";
import Header from "./Header";


class Routes {
    static Router: React.FC = () => <DefaultRouter/>;
    static Header: React.FC = () => <Header/>
    static Components: RoutesComponent[] = [];

    constructor(routerSetting?: string) {
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
    };

    static add = (Component: React.FC, path: string, name: string, exact: boolean = false) => {
        const component: RoutesComponent = new RoutesComponent(Component, path, name, exact);
        let flag: boolean = true;
        Routes.Components.map(v => {
            if (flag) {
                flag = v.name !== name;
            }
        })
        if (flag) {
            Routes.Components.push(component);
        }
    }

    // tslint:disable-next-line:ban-types
    static render = (target: Function[]) => {
        target.map(v => {
            v();
        })
    }
}

export default Routes;