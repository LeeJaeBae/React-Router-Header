import React from "react";
import { RoutesComponent } from "./RoutesComponent";
declare class Routes {
    static Router: React.FC;
    static Header: React.FC;
    static Components: RoutesComponent[];
    constructor(routerSetting?: string);
    static add: (Component: React.FC, path: string, name: string, exact?: boolean) => void;
    static render: (target: Function[]) => void;
}
export default Routes;
//# sourceMappingURL=Routes.d.ts.map