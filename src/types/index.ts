export type ChildrenProps = {
  children: JSX.Element;
};

export type ProductProps = {
  product: {
    id: number;
    title: string;
    description: string;
    image: string;
    price: number;
  };
};
