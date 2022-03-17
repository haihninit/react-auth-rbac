import React from "react";
import { Suspense, useContext } from "react";
import { AppRouterContext } from "../context/Context";
export var Common = function (props) {
    var component = props.component, fallback = props.fallback;
    var ctx = useContext(AppRouterContext);
    var defaultFallback = ctx.config.defaultFallback;
    var SuspenseFallbackComponent = fallback || defaultFallback || null;
    return React.createElement(Suspense, { fallback: SuspenseFallbackComponent }, component);
};
