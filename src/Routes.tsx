import React, { useContext } from "react";
import { AppRouterContext } from "./context/Context";
import { Route, Routes as ReactRouterDomRoutes } from "react-router-dom";
import { Common, Private, Public } from "./route";
import { IAppRoute } from ".";

export const AppRoutes = () => {
  const ctx = useContext(AppRouterContext);
  if (!ctx)
    throw Error(`<AppRoutes /> Component must be wrapped by AppRouterProvider`);

  const { config } = ctx;

  return (
    <ReactRouterDomRoutes>
      {config.common && renderRoutes(config.common, Common)}
      {config.public && renderRoutes(config.public, Public)}
      {config.private && renderRoutes(config.private, Private)}
    </ReactRouterDomRoutes>
  );
};

/**
 * Render the list of routes
 * @param routes
 * @param AppRouteComponent
 * @returns
 */
const renderRoutes = (
  routes: IAppRoute[],
  AppRouteComponent: React.FC<IAppRoute>
) => {
  return routes.map((route) => renderSingleRoute(route, AppRouteComponent));
};

/**
 * Render a single route and its children
 * @param routeProps
 * @param AppRouteComponent
 * @returns
 */
const renderSingleRoute = (
  routeProps: IAppRoute,
  AppRouteComponent: React.FC<IAppRoute>
) => {
  return (
    <Route
      key={routeProps.path}
      path={routeProps.path}
      element={<AppRouteComponent {...routeProps} />}
    >
      {routeProps.children &&
        routeProps.children.map((childRouteProps) =>
          renderSingleRoute(childRouteProps, AppRouteComponent)
        )}
    </Route>
  );
};
