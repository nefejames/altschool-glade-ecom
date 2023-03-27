import {
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Input,
  Link,
  Text,
  Stack,
} from "@chakra-ui/react";
import { useCartItemContext } from "@/context/CartItemContext";
import { useCartCountContext } from "@/context/CartCountContext";
import DiscountPrice from "@/utils/discountPrice";

export default function Cart() {
  const { count } = useCartCountContext();
  const { cartItemData } = useCartItemContext();

  return (
    <Box>
      {!cartItemData ? (
        <Stack spacing={3}>
          <Text>There are no items in your cart. Do some shopping first</Text>
          <Link href="/">
            <Button colorScheme="green">Start shopping</Button>
          </Link>
        </Stack>
      ) : (
        <Flex flexWrap="wrap">
          <Box
            w={["100%", "100%", "60%"]}
            fontSize="14px"
            p="20px"
            bgColor="#f3f3f3"
          >
            <Flex
              align="center"
              borderBlock="1px solid #f3f3f3"
              bgColor="white"
              p="10px"
            >
              <Image src={cartItemData.image} w={["100px", "150px"]} />
              <Box p="30px 10px" flex="1">
                <Text fontWeight="bold">{cartItemData.title}</Text>

                <Flex
                  justify="space-between"
                  align="flex-end"
                  flexWrap="wrap"
                  w="100%"
                  mt="6"
                >
                  <Text fontSize="18px" fontWeight="bold">
                    ${DiscountPrice(cartItemData.price, 20)}
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </Box>

          <Box border="1px solid #f4f4f4" fontSize="14px" p="20px" mx="2%">
            <Text pt="5%" pb="2%">
              Input discount code{" "}
            </Text>
            <Flex
              align="center"
              w="100%"
              p="2px"
              mb="5%"
              border="1px"
              bgColor="white"
              borderColor="gray.100"
              borderRadius="0"
            >
              <Input
                placeholder="Enter code"
                fontSize="14px"
                borderRadius="0"
              />
              <Button
                bgColor="gray.100"
                fontSize="14px"
                p="12px 25px"
                border="1px"
                borderColor="gray.100"
                borderRadius="0"
              >
                Redeem code
              </Button>
            </Flex>
            <Text fontWeight="700" fontSize="18px" mb="3">
              Cart Summary
            </Text>
            <Flex justify="space-between" bgColor="white" p="15px">
              <Text>Subtotal</Text>
              <Text as="b">
                {` $${count * DiscountPrice(cartItemData.price, 20)}`}
              </Text>
            </Flex>
            <Divider />

            <Flex justify="space-between" bgColor="white" p="15px">
              <Text>Total:</Text>
              <Text as="b" fontSize="20px" color="green.800">
                {` $${count * DiscountPrice(cartItemData.price, 20)}`}
              </Text>
            </Flex>
            <Link href="/checkout">
              <Button w="100%" colorScheme="green">
                Checkout
              </Button>
            </Link>
          </Box>
        </Flex>
      )}
    </Box>
  );
}
