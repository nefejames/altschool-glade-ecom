import { Button } from "@chakra-ui/react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useAddToCartContext } from "@/context/AddToCartContext";
import { useCartItemContext } from "@/context/CartItemContext";
import { useCartCountContext } from "@/context/CartCountContext";

export default function AddToCartButton({ productData }) {
  const { count } = useCartCountContext();
  const { isAddedToCart, setIsAddedToCart } = useAddToCartContext();
  const { setCartItemData } = useCartItemContext();

  const handleAddProduct = () => {
    setIsAddedToCart(true);
    setCartItemData(productData);
  };

  return (
    <>
      <Button
        leftIcon={<AiOutlineShoppingCart />}
        colorScheme="green"
        w="100%"
        h="45px"
        onClick={handleAddProduct}
        isDisabled={count <= 0 && isAddedToCart == false}
      >
        Add to cart
      </Button>
    </>
  );
}
