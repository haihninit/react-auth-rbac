import { useMemo } from "react";
/**
 * Custom hook that returns a boolean value if the user can access the specified route path,
 * by assigned role
 *
 * @param path
 * @param userRole
 * @param routeRoles
 * @returns [boolean]
 */
export var useRole = function (path, userRole, routeRoles) {
    var userHasRequiredRole = useMemo(function () {
        /** the route has some roles */
        if (routeRoles && routeRoles.length) {
            if (!userRole) {
                /** but user has no role */
                var errorMsg = "The path ".concat(path, " has some required roles: ").concat(JSON.stringify(routeRoles), ", but current user does not have a role!");
                console.error(errorMsg);
                // throw new Error(errorMsg);
            }
            else {
                /** user has a role, validate it! */
                var roleIsIncluded = routeRoles.includes(userRole);
                return roleIsIncluded;
            }
        }
        else {
            /** the route has no roles */
            return true;
        }
        return false;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [path, JSON.stringify(routeRoles), userRole]);
    return [userHasRequiredRole];
};
