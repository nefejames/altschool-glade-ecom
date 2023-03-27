import { Flex, Link } from "@chakra-ui/react";
import CartPopoverDetails from "@/components/cart";

export default function Navbar() {
  return (
    <nav>
      <Flex
        justify="space-between"
        align="center"
        shadow="base"
        px={["10%", "0px", "5%", "10%"]}
        py="2.5"
        mb="10"
      >
        <Flex align="center" minW="15%" fontSize="18px" color="brand.900">
          <Link href="/" fontWeight={600} color="black" ms="2" title="logo">
            GladeEcommerce
          </Link>
        </Flex>

        <Flex
          align="center"
          justify="flex-end"
          w="22%"
          position="relative"
          fontSize="18px"
        >
          <CartPopoverDetails />
        </Flex>
      </Flex>
    </nav>
  );
}
