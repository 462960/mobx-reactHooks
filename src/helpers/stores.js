import React, { createContext } from "react";
import { useLocalStore } from "mobx-react";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    bugs: [],
    addBug: bug => {
      store.bugs.push(bug);
    }
  }));

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
