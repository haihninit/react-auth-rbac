import React from "react";
import { InvalidUserRoleDefaultFallbackProps } from "../types";

const InvalidUserRoleDefaultFallback: React.FC<
  InvalidUserRoleDefaultFallbackProps
> = ({ routeRequiredRoles, currentUserRole }) => (
  <p>
    Permission denied!
    <p>
      Current user role is <b>{currentUserRole || "unknown"}</b>, required
      roles: <b>{JSON.stringify(routeRequiredRoles)}</b>
    </p>
  </p>
);

export default InvalidUserRoleDefaultFallback;
