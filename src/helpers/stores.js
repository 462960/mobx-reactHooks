import React, { createContext } from "react";
import { useLocalStore, useObserver } from "mobx-react";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    bugs: ["One"]
  }));

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
