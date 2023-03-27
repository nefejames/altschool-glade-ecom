import { createContext, useContext, useState } from "react";

const CartCountContext = createContext({});

export function CartCountContextProvider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <CartCountContext.Provider value={{ count, setCount }}>
      {children}
    </CartCountContext.Provider>
  );
}

export const useCartCountContext = () => useContext(CartCountContext);
