import React from "react";


export interface RouteComponent {
    name: string;
    path: string;
    components: React.FC | React.Component | React.ComponentElement<any, any>;
    exact?: boolean;
}


export class RoutesComponent implements RouteComponent {
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