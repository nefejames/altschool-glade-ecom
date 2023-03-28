import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import {
  AddToCartContextProvider,
  CartCountContextProvider,
  CartItemContextProvider,
  FilteredProductsContextProvider,
} from "@/context/index";
import Layout from "@/layout/index";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <CartCountContextProvider>
        <AddToCartContextProvider>
          <CartItemContextProvider>
            <FilteredProductsContextProvider>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </FilteredProductsContextProvider>
          </CartItemContextProvider>
        </AddToCartContextProvider>
      </CartCountContextProvider>
    </ChakraProvider>
  );
}
