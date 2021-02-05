// Type definitions for react-router-header 0.1.x
// Project: https://github.com/leejaebae/react-router-header
// Definitions by: JaeWon Lee <https://github.com/leejaebae>
import React from 'react'

export class Routes {
    static Router: React.FC;
    static Header: React.FC;
    static Components: RoutesComponent[]

    static add = (Component: React.FC, path: string, name: string, exact: boolean = false) => void;

    static render = (target: ((func?: any) => void)[]) => void;
}