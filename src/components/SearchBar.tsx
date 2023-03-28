import { FC } from "react";
import { Flex, IconButton, Input } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const SearchBar: FC = () => {
  return (
    <Flex
      align="center"
      w="100%"
      p="2px"
      border="1px"
      borderColor="gray.100"
      borderRadius="0"
      position="relative"
    >
      <Input placeholder="Search here" fontSize="14px" borderRadius="0" />
      <IconButton
        icon={<FaSearch />}
        bg="none"
        p={0}
        bgColor="green.100"
        borderRadius={0}
        position="relative"
        _hover={{ bg: "none" }}
        _active={{ bg: "none" }}
        _focus={{ border: "none" }}
        aria-label="button to trigger the product search functionality"
      />
    </Flex>
  );
};

export default SearchBar;
