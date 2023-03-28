import { FC } from "react";
import { Badge, Box, Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import DiscountPrice from "@/utils/discountPrice";
import { ProductProps } from "@/types/index";

const ProductCard: FC<ProductProps> = ({ product }) => {
  return (
    <Link href={`product/${product.id}`}>
      <Box position="relative" boxShadow="lg">
        <Badge colorScheme="green" position="absolute" top="10px" right="10px">
          20%
        </Badge>

        <Image w="90%" h="250px" src={product.image} alt="product" p="4" />

        <Box p="4" fontSize="14px">
          <Flex gap={4} alignItems="center">
            <Text fontSize="16px" fontWeight="600">
              ${DiscountPrice(product.price, 20)}
            </Text>{" "}
            <Badge colorScheme="gray" textDecoration="line-through">
              ${product.price}
            </Badge>
          </Flex>
          <Text>{product.title}</Text>
        </Box>
      </Box>
    </Link>
  );
};

export default ProductCard;
