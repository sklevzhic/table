import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {publicRoutes, RouteNames} from "../router";

const AppRouter = () => {
    return (
        <Switch>
            {publicRoutes.map(route =>
                <Route path={route.path}
                       exact={route.exact}
                       component={route.component}
                       key={route.path}
                />
            )}
            <Redirect to={RouteNames.HOME}></Redirect>
        </Switch>
    );
};

export default AppRouter;