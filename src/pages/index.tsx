import { FC } from "react";
import { SimpleGrid } from "@chakra-ui/react";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";

export type ProductProps = {
  product: {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: { count: number; rate: number };
    title: string;
  };
};

type ProductArrayProps = {
  data: ProductProps[];
};

const Home: FC<ProductArrayProps> = ({ data }) => {
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
};

export async function getServerSideProps() {
  const res = await fetch("https://fakestoreapi.com/products?limit=4");
  const data = await res.json();

  return {
    props: { data },
  };
}

export default Home;
