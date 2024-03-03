import { AbmProduct } from "@/components/products/abmProduct/AbmProduct";
import { IProduct } from "@/interfaces/product";
import { Grid, IconButton, Paper, Typography } from "@mui/material";
import { useRouter } from "next/router";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
interface DetailProductContainerProps {
  product?: IProduct;
}
export const DetailProductContainer = ({
  product,
}: DetailProductContainerProps) => {
  const router = useRouter();

  const actionSuccesEdit = async () => {
    router.replace(router.asPath);
  };

  return (
    <Paper sx={{ p: { xs: 1, sm: 5 } }}>
      <Grid
        container
        display="flex"
        alignContent={"center"}
        alignItems={"center"}
      >
        <IconButton onClick={() => router.push("/")} color="secondary">
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="body1">Go back</Typography>
      </Grid>
      <AbmProduct
        product={product}
        handleReturn={() => router.replace("/")}
        initialState={{
          mode: "read",
          showModalDelete: false,
        }}
        actionSuccesEdit={actionSuccesEdit}
      >
        <Grid container>
          <Grid item xs={12} sm={8}>
            <AbmProduct.Title title="Detail product" />
          </Grid>
          <Grid item xs={12} sm={12} display={"flex"} justifyContent={"right"}>
            <Grid item>
              <AbmProduct.Actions />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={5}>
            <AbmProduct.Image />
          </Grid>
          <Grid item xs={12} sm={7}>
            <AbmProduct.Info />
          </Grid>
        </Grid>
      </AbmProduct>
    </Paper>
  );
};
