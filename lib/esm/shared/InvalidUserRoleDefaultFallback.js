import React from "react";
var InvalidUserRoleDefaultFallback = function (_a) {
    var routeRequiredRoles = _a.routeRequiredRoles, currentUserRole = _a.currentUserRole;
    return (React.createElement("p", null,
        "Permission denied!",
        React.createElement("p", null,
            "Current user role is ",
            React.createElement("b", null, currentUserRole || "unknown"),
            ", required roles: ",
            React.createElement("b", null, JSON.stringify(routeRequiredRoles)))));
};
export default InvalidUserRoleDefaultFallback;
