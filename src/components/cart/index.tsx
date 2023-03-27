import {
  Box,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Stack,
} from "@chakra-ui/react";
import CartBody from "./CartBody";
import CartIcon from "./CartIcon";
import { useAddToCartContext } from "@/context/AddToCartContext";
import { useCartCountContext } from "@/context/CartCountContext";

export default function CartPopoverDetails() {
  const { count, setCount } = useCartCountContext();
  const { isAddedToCart, setIsAddedToCart } = useAddToCartContext();

  return (
    <Popover>
      <PopoverTrigger>
        <Box w="40px" h="40px">
          <CartIcon isAddedToCart={isAddedToCart} count={count} />
        </Box>
      </PopoverTrigger>
      <PopoverContent _focus={{ border: "none" }} boxShadow="md">
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader
          fontWeight="700"
          borderBottom="1px solid"
          borderColor="#ccc"
        >
          Cart
        </PopoverHeader>
        <PopoverBody>
          <Stack p="2">
            <CartBody
              count={count}
              setCount={setCount}
              isAddedToCart={isAddedToCart}
              setIsAddedToCart={setIsAddedToCart}
            />
          </Stack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
