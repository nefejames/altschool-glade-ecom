import { FC } from "react";
import { Badge, Flex, Image, Text, Stack } from "@chakra-ui/react";
import AddToCartButton from "./cart/AddToCartButton";
import CartCounter from "./cart/CartCounter";
import DiscountPrice from "@/utils/discountPrice";
import { ProductProps } from "@/types/index";

const ProductDetail: FC<ProductProps> = ({ product }) => {
  return (
    <>
      <Stack direction={["column", "row"]}>
        <Flex w={["100%", "40%"]}>
          <Image
            src={product.image}
            w={["80%", "280px"]}
            h="100%"
            alt={product.title}
          />
        </Flex>

        <Stack w={["100%", "100%", "45%"]} py={{ base: "5" }} spacing={7}>
          <Text fontSize="25px" fontWeight="600">
            {product.title}
          </Text>
          <Text fontSize="30px" color="gray.500">
            {DiscountPrice(product.price, 20)}

            <Badge colorScheme="gray" ms="10px" textDecoration="line-through">
              ${product.price}
            </Badge>
          </Text>

          <Text lineHeight="25px">{product.description}</Text>

          <Stack direction={{ base: "column", md: "row" }} gap={4}>
            <CartCounter />
            <AddToCartButton productData={product} />
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default ProductDetail;
