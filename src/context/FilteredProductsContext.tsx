import { createContext, useContext, useState } from "react";

const FilteredProductsContext = createContext({});

export function FilteredProductsContextProvider({ children }) {
  const [filteredProducts, setFilteredProducts] = useState([null]);

  return (
    <FilteredProductsContext.Provider
      value={{ filteredProducts, setFilteredProducts }}
    >
      {children}
    </FilteredProductsContext.Provider>
  );
}

export const useFilteredProductsContext = () =>
  useContext(FilteredProductsContext);
