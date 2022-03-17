"use strict";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
var react_1 = __importStar(require("react"));
var Context_1 = require("./context/Context");
var react_router_dom_1 = require("react-router-dom");
var route_1 = require("./route");
var AppRoutes = function () {
    var ctx = (0, react_1.useContext)(Context_1.AppRouterContext);
    if (!ctx)
        throw Error("<AppRoutes /> Component must be wrapped by AppRouterProvider");
    var config = ctx.config;
    return (react_1.default.createElement(react_router_dom_1.Routes, null,
        config.common && renderRoutes(config.common, route_1.Common),
        config.public && renderRoutes(config.public, route_1.Public),
        config.private && renderRoutes(config.private, route_1.Private)));
};
exports.AppRoutes = AppRoutes;
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
    return (react_1.default.createElement(react_router_dom_1.Route, { key: routeProps.path, path: routeProps.path, element: react_1.default.createElement(AppRouteComponent, __assign({}, routeProps)) }, routeProps.children &&
        routeProps.children.map(function (childRouteProps) {
            return renderSingleRoute(childRouteProps, AppRouteComponent);
        })));
};
