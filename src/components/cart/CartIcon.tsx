import { Badge, IconButton } from "@chakra-ui/react";

import { AiOutlineShoppingCart } from "react-icons/ai";

export default function CartIcon({ isAddedToCart, count }) {
  return (
    <>
      <IconButton
        icon={<AiOutlineShoppingCart size="20px" />}
        bg="none"
        p={0}
        position="relative"
        _hover={{ bg: "none" }}
        _active={{ bg: "none" }}
        _focus={{ border: "none" }}
        aria-label="cart button to trigger cart content display"
      />

      {isAddedToCart && count > 0 ? (
        <Badge position="absolute" top="0" right="-5px" colorScheme="green">
          {count}
        </Badge>
      ) : null}
    </>
  );
}
