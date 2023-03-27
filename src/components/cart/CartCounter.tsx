import { Button, Stack, Text } from "@chakra-ui/react";
import { useCartCountContext } from "@/context/CartCountContext";

export default function CartCounter() {
  const { count, setCount } = useCartCountContext();

  function handleAddProduct() {
    setCount(count + 1);
  }

  function handleSubtractProduct() {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      borderRadius="lg"
      w={{ base: "100%", md: "220px" }}
    >
      <Stack w="40px" h="45px" justifyContent="center" alignItems="center">
        <Button
          color="white"
          bgColor="green.300"
          onClick={handleSubtractProduct}
          _hover={{ bgColor: "green.400" }}
        >
          -
        </Button>
      </Stack>
      <Stack w="10px" h="45px" justifyContent="center" alignItems="center">
        <Text>{count}</Text>
      </Stack>
      <Stack w="40px" h="45px" justifyContent="center" alignItems="center">
        <Button
          color="white"
          bgColor="green.300"
          onClick={handleAddProduct}
          _hover={{ bgColor: "green.400" }}
        >
          +
        </Button>
      </Stack>
    </Stack>
  );
}
