import React from "react";

export interface acceptedType {
    search: ((e: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
    word: string;
}

export const ViewContext = React.createContext<acceptedType>({} as acceptedType);

interface Child extends acceptedType {
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