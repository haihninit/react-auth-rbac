import React from "react";
import { FC, ReactElement, Suspense, useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AppRouterContext } from "../context/Context";
import { IAppRoute } from "../types";

export const Public: FC<IAppRoute> = (props): ReactElement => {
  const { component, fallback, path } = props;
  const ctx = useContext(AppRouterContext);
  const location = useLocation();
  const {
    config: { defaultFallback, privateRedirectRoute },
    isAuth,
  } = ctx!;

  const state = (location.state as { redirectFrom: string }) || {
    redirectFrom: privateRedirectRoute,
  };

  const redirectTo: string = state.redirectFrom || "/";
  const SuspenseFallbackComponent = fallback || defaultFallback || null;

  /** user must not be authorized */
  if (isAuth) {
    return <Navigate to={redirectTo} replace state={{ redirectFrom: path }} />;
  }

  /** user is not authorized */
  return <Suspense fallback={SuspenseFallbackComponent}>{component}</Suspense>;
};
