import React from "react";
import {RoutesComponent} from "./Routes.d";

export class RouteComponent implements RoutesComponent {
    constructor(Component: React.FC | React.Component, path: string, name: string, exact: boolean) {
        this.name = name;
        this.path = path;
        this.components = Component;
        this.exact = exact;
    }

    name: string;
    path: string;
    components: React.FC<{}> | React.Component<{}, {}, any>;
    exact?: boolean;
}