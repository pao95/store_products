import { NewProductContainer } from "@/components/containers/newProduct/NewProductContainer";
import { LayoutPages } from "@/components/layout/LayoutPages";

import { Grid } from "@mui/material";

/**
 * Represents the page for creating a new product.
 */
export default function NewProductPage() {
  return (
    <LayoutPages title={"create-product"}>
      <Grid container>
        <Grid item xs={12} mt={5}>
          <NewProductContainer />
        </Grid>
      </Grid>
    </LayoutPages>
  );
}
