import { Box } from "@chakra-ui/react";
import MetaTags from "./MetaTags";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <MetaTags />
      <Navbar />
      <Box px={[null, "20px", "5%", "10%"]}>{children}</Box>
    </>
  );
}
