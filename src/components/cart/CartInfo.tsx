import { useCartItemContext } from "@/context/CartItemContext";
import DiscountPrice from "@/utils/discountPrice";
import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { FiTrash2 } from "react-icons/fi";

export default function CartInfo({ cartCount, setCount, setIsAddedToCart }) {
  const { cartItemData, setCartItemData } = useCartItemContext();

  const handleDeleteCart = () => {
    setCount(0);
    setIsAddedToCart(false);
    setCartItemData(null);
  };

  return (
    <Flex alignItems="center" justifyContent="space-between" gap={7}>
      <Image src={cartItemData.image} w="40px" borderRadius="md" />
      <Stack spacing={0}>
        <Text fontSize="sm" color="#999" noOfLines={[1, 2]}>
          {cartItemData.title}
        </Text>
        <Flex alignItems="center" gap={2}>
          <Text fontSize="md" color="#999">
            {`${cartCount} x ${DiscountPrice(cartItemData.price, 20)}`} {""}
            &#8594;
          </Text>
          <Text fontSize="md" fontWeight="700">{` $${
            cartCount * DiscountPrice(cartItemData.price, 20)
          }.00`}</Text>
        </Flex>
      </Stack>
      <Box w={3} h={4} onClick={handleDeleteCart} cursor="pointer">
        <FiTrash2 />
      </Box>
    </Flex>
  );
}
