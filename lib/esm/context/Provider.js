import React from "react";
import { AppRouterContext } from "./Context";
var AppRouterProvider = function (props) {
    var children = props.children, config = props.config, isAuth = props.isAuth, userRole = props.userRole;
    return (React.createElement(AppRouterContext.Provider, { value: { config: config, isAuth: isAuth, userRole: userRole } }, children));
};
export { AppRouterProvider };
