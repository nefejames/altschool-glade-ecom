import ProductDetail from "../../components/ProductDetail";

export default function SingleProductPage({ data }) {
  return (
    <>
      <ProductDetail product={data} />
    </>
  );
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const data = await res.json();

  return {
    props: { data },
  };
}

export async function getStaticPaths() {
  const res = await fetch(`https://fakestoreapi.com/products?limit=4`);
  const data = await res.json();

  const paths = data.map((product) => {
    return {
      params: { id: String(product.id) },
    };
  });

  return {
    paths,
    fallback: true,
  };
}
