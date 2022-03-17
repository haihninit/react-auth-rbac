import React from "react";
import { Suspense, useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AppRouterContext } from "../context/Context";
export var Public = function (props) {
    var component = props.component, fallback = props.fallback, path = props.path;
    var ctx = useContext(AppRouterContext);
    var location = useLocation();
    var _a = ctx, _b = _a.config, defaultFallback = _b.defaultFallback, privateRedirectRoute = _b.privateRedirectRoute, isAuth = _a.isAuth;
    var state = location.state || {
        redirectFrom: privateRedirectRoute,
    };
    var redirectTo = state.redirectFrom || "/";
    var SuspenseFallbackComponent = fallback || defaultFallback || null;
    /** user must not be authorized */
    if (isAuth) {
        return React.createElement(Navigate, { to: redirectTo, replace: true, state: { redirectFrom: path } });
    }
    /** user is not authorized */
    return React.createElement(Suspense, { fallback: SuspenseFallbackComponent }, component);
};
