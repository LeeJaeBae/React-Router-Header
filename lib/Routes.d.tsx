import React from 'react'

export interface Routes {
    Router: React.FC | React.Component;
    Components: RoutesComponent[];
}

export interface RoutesComponent {
    name: string;
    path: string;
    components: React.FC | React.Component | React.ComponentElement<any, any>;
    exact?: boolean;
}