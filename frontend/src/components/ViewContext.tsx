import React from "react";
import { searchType } from "./CustomType";

export const ViewContext = React.createContext<searchType>({} as searchType);

interface Child extends searchType {
  children: React.ReactNode;
}
export const ViewProvider = ({
    children,
  word,
  search,
}: Child) => {
  return (
    <ViewContext.Provider
      value={{ search, word }}
    >
      {children}
    </ViewContext.Provider>
  );
};