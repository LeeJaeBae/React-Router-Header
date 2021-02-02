import React from 'react'
import {RoutesComponent} from 'RoutesComponent';

export interface Routes {
    Router: React.FC | React.Component;
    Components: RoutesComponent[];
}
