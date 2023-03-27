import { SimpleGrid } from "@chakra-ui/react";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";

export default function Home({ data }) {
  return (
    <>
      <main>
        <SearchBar />
        <SimpleGrid columns={[1, null, 4]} spacing="10" mt="10">
          {data.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </SimpleGrid>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://fakestoreapi.com/products?limit=4");
  const data = await res.json();

  return {
    props: { data },
  };
}
