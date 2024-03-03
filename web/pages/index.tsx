import { LayoutPages } from "@/components/layout/LayoutPages";
import { ProductsList } from "@/components/containers/productsList/ProductsList";
import { GetStaticPaths, GetStaticProps } from "next";
import { getProducts } from "@/services/products";
import { IProduct } from "@/interfaces/product";

interface ListProductsPageProps {
  products: IProduct[];
}

/**
 * Represents the page for listing products.
 * @param products The array of products to display.
 */
export default function ListProductsPage({
  products = [],
}: ListProductsPageProps) {
  return (
    <LayoutPages description="TODO: definir descripcion" title="List products">
      <ProductsList products={products} />
    </LayoutPages>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const products = await getProducts();
  return {
    props: {
      products,
    },
  };
};
