import React from "react";
import { FC, ReactElement, Suspense, useContext } from "react";
import { AppRouterContext } from "../context/Context";
import { IAppRoute } from "../types";

export const Common: FC<IAppRoute> = (props): ReactElement => {
  const { component, fallback } = props;
  const ctx = useContext(AppRouterContext);
  const {
    config: { defaultFallback },
  } = ctx!;

  const SuspenseFallbackComponent = fallback || defaultFallback || null;

  return <Suspense fallback={SuspenseFallbackComponent}>{component}</Suspense>;
};
