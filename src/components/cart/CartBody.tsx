import Link from "next/link";
import { Button, Stack, Text } from "@chakra-ui/react";
import CartInfo from "./CartInfo";

export default function CartBody({
  count,
  setCount,
  isAddedToCart,
  setIsAddedToCart,
}) {
  return (
    <Stack gap={3}>
      {count > 0 && isAddedToCart ? (
        <>
          <CartInfo
            cartCount={count}
            setCount={setCount}
            setIsAddedToCart={setIsAddedToCart}
          />{" "}
          <Link href="/cart">
            <Button colorScheme="green">Checkout</Button>
          </Link>
        </>
      ) : (
        <Stack w="100%" h="150px" justifyContent="center" alignItems="center">
          <Text fontSize="sm" fontWeight="700" color="#888" w="fit-content">
            Your cart is empty.
          </Text>
        </Stack>
      )}
    </Stack>
  );
}
