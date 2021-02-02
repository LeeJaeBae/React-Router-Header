import React from "react";


export interface RouteComponent {
    name: string;
    path: string;
    component: React.FC;
    exact?: boolean;
}


export class RoutesComponent implements RouteComponent {
    constructor(Component: React.FC, path: string, name: string, exact: boolean) {
        this.name = name;
        this.path = path;
        this.component = Component;
        this.exact = exact;
    }

    name: string;
    path: string;
    component: React.FC;
    exact?: boolean;
}