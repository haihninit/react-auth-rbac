var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { useContext } from "react";
import { AppRouterContext } from "./context/Context";
import { Route, Routes as ReactRouterDomRoutes } from "react-router-dom";
import { Common, Private, Public } from "./route";
export var AppRoutes = function () {
    var ctx = useContext(AppRouterContext);
    if (!ctx)
        throw Error("<AppRoutes /> Component must be wrapped by AppRouterProvider");
    var config = ctx.config;
    return (React.createElement(ReactRouterDomRoutes, null,
        config.common && renderRoutes(config.common, Common),
        config.public && renderRoutes(config.public, Public),
        config.private && renderRoutes(config.private, Private)));
};
/**
 * Render the list of routes
 * @param routes
 * @param AppRouteComponent
 * @returns
 */
var renderRoutes = function (routes, AppRouteComponent) {
    return routes.map(function (route) { return renderSingleRoute(route, AppRouteComponent); });
};
/**
 * Render a single route and its children
 * @param routeProps
 * @param AppRouteComponent
 * @returns
 */
var renderSingleRoute = function (routeProps, AppRouteComponent) {
    return (React.createElement(Route, { key: routeProps.path, path: routeProps.path, element: React.createElement(AppRouteComponent, __assign({}, routeProps)) }, routeProps.children &&
        routeProps.children.map(function (childRouteProps) {
            return renderSingleRoute(childRouteProps, AppRouteComponent);
        })));
};
