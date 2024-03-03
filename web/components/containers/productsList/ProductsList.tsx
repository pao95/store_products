import { FilterSearch } from "@/components/filterSearch/FilterSearch";
import { CardProduct } from "@/components/products/card/CardProduct";
import { useFilter } from "@/hooks/useFilter";
import { IProduct } from "@/interfaces/product";
import { Button, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";

interface PrincipalLayoutProps {
  products: IProduct[];
}
export const ProductsList = ({ products }: PrincipalLayoutProps) => {
  const router = useRouter();
  const { filterByCondition, productsFilter, applyFilter } =
    useFilter(products);
  return (
    <Grid container spacing={2} display={"flex"} justifyContent={"center"}>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={12} sm={3} display={"flex"} justifyContent={"left"}>
            <Typography variant="h5">Products list</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FilterSearch
              productsFilter={productsFilter}
              filterByCondition={filterByCondition}
              applyFilter={applyFilter}
            />
          </Grid>

          <Grid item xs={12} sm={3} display={"flex"} justifyContent={"right"}>
            <Button
              id="add_create_button"
              variant="contained"
              onClick={() => router.replace("/product/new")}
              color="secondary"
            >
              New product
            </Button>
          </Grid>
        </Grid>
      </Grid>

      {productsFilter.map((product) => (
        <Grid item xs={12} md={3} xl={2} key={product.id}>
          <CardProduct
            name={product.name}
            imageUrl={product.imageUrl}
            descriptionShort={product.descriptionShort}
            id={product.id}
          />
        </Grid>
      ))}
      {productsFilter.length === 0 && (
        <Typography variant="subtitle1" mt={10}>
          No products were found
        </Typography>
      )}
    </Grid>
  );
};
