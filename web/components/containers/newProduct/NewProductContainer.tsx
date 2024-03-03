import { AbmProduct } from "@/components/products/abmProduct/AbmProduct";
import { Grid, IconButton, Paper, Typography } from "@mui/material";
import { useRouter } from "next/router";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const NewProductContainer = () => {
  const router = useRouter();

  const actionSuccessCreate = (id: string) => {
    router.replace(`/product/${id}`);
  };

  return (
    <Paper
      sx={{
        p: 5,
      }}
    >
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
        handleReturn={() => router.replace("/")}
        initialState={{
          mode: "create",
          showModalDelete: false,
        }}
        actionSuccessCreate={actionSuccessCreate}
      >
        <Grid container display={"flex"} justifyContent={"center"}>
          <Grid item xs={8}>
            <AbmProduct.Title title="Create new product" />
          </Grid>
          <Grid item xs={8}>
            <AbmProduct.Info />
          </Grid>
        </Grid>
      </AbmProduct>
    </Paper>
  );
};
