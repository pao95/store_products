import { DetailProductContainer } from "@/components/containers/detailProduct/ProductDetailContainer";
import { LayoutPages } from "@/components/layout/LayoutPages";
import { IProduct } from "@/interfaces/product";
import { getProduct, getProducts } from "@/services/products";
import { Grid } from "@mui/material";
import { GetStaticPaths, GetStaticProps } from "next";

interface ProductDetailPageProps {
  product: IProduct;
}

/**
 * Represents the page for displaying details of a single product.
 * @param product The product to display details for.
 */
export default function ProductDetailPage({ product }: ProductDetailPageProps) {
  return (
    <LayoutPages title={product.name} description={product.descriptionShort}>
      <Grid container>
        <Grid item xs={12} sx={{ mt: { xs: 1, sm: 5 } }}>
          <DetailProductContainer product={product} />
        </Grid>
      </Grid>
    </LayoutPages>
  );
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const products = await getProducts();

  return {
    paths: products.map(({ id }) => ({
      params: {
        id: id.toString(),
      },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id = "" } = params as { id: string };
  const product = await getProduct(id);

  if (!product) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      product,
    },
    revalidate: 86400,
  };
};
