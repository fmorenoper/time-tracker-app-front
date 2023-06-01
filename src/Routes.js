import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage } from './home';
import { AddTaskPage } from './tasks';

const routes = [{
    path: '/',
    Component: HomePage,
    exact: true,
}, 
{
    path: '/add-task',
    Component: AddTaskPage,
}];

export const Routes = () => {
    return (
        <Router>
            <Switch>
            {routes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                >
                    <route.Component />
                </Route>
            ))}
            </Switch>
        </Router>
    );
}