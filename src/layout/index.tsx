import { FC } from "react";
import { Box } from "@chakra-ui/react";
import MetaTags from "./MetaTags";
import Navbar from "./Navbar";
import { ChildrenProps } from "@/types/index";

const Layout: FC<ChildrenProps> = ({ children }) => {
  return (
    <>
      <MetaTags />
      <Navbar />
      <Box px={[null, "20px", "5%", "10%"]}>{children}</Box>
    </>
  );
};

export default Layout;
