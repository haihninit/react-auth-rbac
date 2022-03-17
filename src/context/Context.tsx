import React from "react";
import { IAppRouterContextProps } from "../types";

const AppRouterContext = React.createContext<
  IAppRouterContextProps | undefined
>(undefined);

export { AppRouterContext };
