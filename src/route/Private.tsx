import React from "react";
import { FC, ReactElement, Suspense, useContext } from "react";
import { IAppRoute } from "../types";
import { Navigate } from "react-router-dom";
import { AppRouterContext } from "../context/Context";
import { useRole } from "../hooks/useRole";
import InvalidUserRoleDefaultFallback from "../shared/InvalidUserRoleDefaultFallback";

export const Private: FC<IAppRoute> = (props): ReactElement => {
  const { component, fallback, roles, path } = props;
  const ctx = useContext(AppRouterContext);
  const {
    config: { defaultFallback, publicRedirectRoute, InvalidUserRoleFallback },
    isAuth,
    userRole,
  } = ctx!;
  const [userHasRequiredRole] = useRole(path, userRole, roles);

  const redirectTo: string = publicRedirectRoute || "/";
  const SuspenseFallbackComponent = fallback || defaultFallback || null;

  /** user must be authorized */
  if (!isAuth) {
    return <Navigate to={redirectTo} replace state={{ redirectFrom: path }} />;
  } else {
    /** user must have the required role that matches a route role */
    if (!userHasRequiredRole) {
      if (InvalidUserRoleFallback)
        return (
          <InvalidUserRoleFallback
            currentUserRole={userRole}
            routeRequiredRoles={roles}
          />
        );
      else
        return (
          <InvalidUserRoleDefaultFallback
            currentUserRole={userRole}
            routeRequiredRoles={roles}
          />
        );
    } else {
      /** user is authorized and roles are OK */
      return (
        <Suspense fallback={SuspenseFallbackComponent}>{component}</Suspense>
      );
    }
  }
};
