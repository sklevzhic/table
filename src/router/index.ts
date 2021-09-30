import React from "react";
import {TablePage} from "../pages/Table";

export interface IRoute {
    path: string;
    component: React.ComponentType;
    exact?: boolean;
}

export enum RouteNames {
    TABLE = '/table',
    HOME = '/'
}

export const publicRoutes: IRoute[] = [
    {path: RouteNames.TABLE, exact: true, component: TablePage}
]
