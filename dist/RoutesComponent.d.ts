import React from "react";
export interface RouteComponent {
    name: string;
    path: string;
    component: React.FC;
    exact?: boolean;
}
export declare class RoutesComponent implements RouteComponent {
    constructor(Component: React.FC | any, path: string, name: string, exact: boolean);
    name: string;
    path: string;
    component: React.FC;
    exact?: boolean;
}
//# sourceMappingURL=RoutesComponent.d.ts.map