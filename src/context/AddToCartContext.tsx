import { createContext, useContext, useState } from "react";

type ContextProps = {
  isAddedToCart: boolean;
};

type ChildrenProps = {
  children: JSX.Element;
};

const AddToCartContext = createContext({} as ContextProps);

export function AddToCartContextProvider({ children }: ChildrenProps) {
  const [isAddedToCart, setIsAddedToCart] = useState<boolean>(false);

  return (
    <AddToCartContext.Provider value={{ isAddedToCart, setIsAddedToCart }}>
      {children}
    </AddToCartContext.Provider>
  );
}

export const useAddToCartContext = () => useContext(AddToCartContext);
