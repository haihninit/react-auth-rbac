import React from "react";
import { IAppRouterContextProps } from "../types";
import { AppRouterContext } from "./Context";

const AppRouterProvider: React.FC<IAppRouterContextProps> = (props) => {
  const { children, config, isAuth, userRole } = props;

  return (
    <AppRouterContext.Provider value={{ config, isAuth, userRole }}>
      {children}
    </AppRouterContext.Provider>
  );
};

export { AppRouterProvider };
