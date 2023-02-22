import { createContext } from "react";

type TSearchValueContext = {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
};

const initialContext = {
  searchValue: "",
  setSearchValue: (value: string) => {},
} as TSearchValueContext;

export const SearchValueContext =
  createContext<TSearchValueContext>(initialContext);
