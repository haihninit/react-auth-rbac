import React from "react";
import { Suspense, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppRouterContext } from "../context/Context";
import { useRole } from "../hooks/useRole";
import InvalidUserRoleDefaultFallback from "../shared/InvalidUserRoleDefaultFallback";
export var Private = function (props) {
    var component = props.component, fallback = props.fallback, roles = props.roles, path = props.path;
    var ctx = useContext(AppRouterContext);
    var _a = ctx, _b = _a.config, defaultFallback = _b.defaultFallback, publicRedirectRoute = _b.publicRedirectRoute, InvalidUserRoleFallback = _b.InvalidUserRoleFallback, isAuth = _a.isAuth, userRole = _a.userRole;
    var userHasRequiredRole = useRole(path, userRole, roles)[0];
    var redirectTo = publicRedirectRoute || "/";
    var SuspenseFallbackComponent = fallback || defaultFallback || null;
    /** user must be authorized */
    if (!isAuth) {
        return React.createElement(Navigate, { to: redirectTo, replace: true, state: { redirectFrom: path } });
    }
    else {
        /** user must have the required role that matches a route role */
        if (!userHasRequiredRole) {
            if (InvalidUserRoleFallback)
                return (React.createElement(InvalidUserRoleFallback, { currentUserRole: userRole, routeRequiredRoles: roles }));
            else
                return (React.createElement(InvalidUserRoleDefaultFallback, { currentUserRole: userRole, routeRequiredRoles: roles }));
        }
        else {
            /** user is authorized and roles are OK */
            return (React.createElement(Suspense, { fallback: SuspenseFallbackComponent }, component));
        }
    }
};
