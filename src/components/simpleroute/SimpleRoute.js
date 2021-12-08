import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { loginRoutes, loginRedirects, dashboardRedirects, dashboardRoutes } from '../../routes';

const SimpleRoute = () => {
  const loggedIn = useSelector((state) => state.login.loggedIn);
  const redirects = loggedIn ? dashboardRedirects : loginRedirects;
  const routes = loggedIn ? dashboardRoutes : loginRoutes;
  return (
    <>
      {redirects.map((redirect) => (
        <Redirect key="redirect" exact path={redirect.path} to={redirect.redirectTo} />
      ))}
      {routes.map((route) => {
        const Comp = route.component;
        return <Route key="route" path={route.path} exact render={() => <Comp />} />;
      })}
    </>
  );
};

export default SimpleRoute;
