"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Private = void 0;
var react_1 = __importDefault(require("react"));
var react_2 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Context_1 = require("../context/Context");
var useRole_1 = require("../hooks/useRole");
var InvalidUserRoleDefaultFallback_1 = __importDefault(require("../shared/InvalidUserRoleDefaultFallback"));
var Private = function (props) {
    var component = props.component, fallback = props.fallback, roles = props.roles, path = props.path;
    var ctx = (0, react_2.useContext)(Context_1.AppRouterContext);
    var _a = ctx, _b = _a.config, defaultFallback = _b.defaultFallback, publicRedirectRoute = _b.publicRedirectRoute, InvalidUserRoleFallback = _b.InvalidUserRoleFallback, isAuth = _a.isAuth, userRole = _a.userRole;
    var userHasRequiredRole = (0, useRole_1.useRole)(path, userRole, roles)[0];
    var redirectTo = publicRedirectRoute || "/";
    var SuspenseFallbackComponent = fallback || defaultFallback || null;
    /** user must be authorized */
    if (!isAuth) {
        return react_1.default.createElement(react_router_dom_1.Navigate, { to: redirectTo, replace: true, state: { redirectFrom: path } });
    }
    else {
        /** user must have the required role that matches a route role */
        if (!userHasRequiredRole) {
            if (InvalidUserRoleFallback)
                return (react_1.default.createElement(InvalidUserRoleFallback, { currentUserRole: userRole, routeRequiredRoles: roles }));
            else
                return (react_1.default.createElement(InvalidUserRoleDefaultFallback_1.default, { currentUserRole: userRole, routeRequiredRoles: roles }));
        }
        else {
            /** user is authorized and roles are OK */
            return (react_1.default.createElement(react_2.Suspense, { fallback: SuspenseFallbackComponent }, component));
        }
    }
};
exports.Private = Private;
