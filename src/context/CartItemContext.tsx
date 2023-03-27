import { createContext, useContext, useState } from "react";

const CartItemContext = createContext({});

export function CartItemContextProvider({ children }) {
  const [cartItemData, setCartItemData] = useState(null);

  return (
    <CartItemContext.Provider value={{ cartItemData, setCartItemData }}>
      {children}
    </CartItemContext.Provider>
  );
}

export const useCartItemContext = () => useContext(CartItemContext);
