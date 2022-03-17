"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Public = void 0;
var react_1 = __importDefault(require("react"));
var react_2 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Context_1 = require("../context/Context");
var Public = function (props) {
    var component = props.component, fallback = props.fallback, path = props.path;
    var ctx = (0, react_2.useContext)(Context_1.AppRouterContext);
    var location = (0, react_router_dom_1.useLocation)();
    var _a = ctx, _b = _a.config, defaultFallback = _b.defaultFallback, privateRedirectRoute = _b.privateRedirectRoute, isAuth = _a.isAuth;
    var state = location.state || {
        redirectFrom: privateRedirectRoute,
    };
    var redirectTo = state.redirectFrom || "/";
    var SuspenseFallbackComponent = fallback || defaultFallback || null;
    /** user must not be authorized */
    if (isAuth) {
        return react_1.default.createElement(react_router_dom_1.Navigate, { to: redirectTo, replace: true, state: { redirectFrom: path } });
    }
    /** user is not authorized */
    return react_1.default.createElement(react_2.Suspense, { fallback: SuspenseFallbackComponent }, component);
};
exports.Public = Public;
