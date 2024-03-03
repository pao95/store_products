import { IProduct } from "@/interfaces/product";
import { Grid, Typography } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
interface ProductReadModeProps {
  product?: IProduct;
}

/**
 * ProductReadMode component displays product information in read mode.
 * @param {IProduct} product - Product object containing information to be displayed.
 */
export const ProductReadMode = ({ product }: ProductReadModeProps) => {
  const {
    name = "",
    descriptionShort = "",
    price = 0,
    stock = 0,
    available = false,
    descriptionLarge = "",
    isOficial,
  } = product ?? {};

  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container spacing={3}>
          <Grid item xs={10}>
            {isOficial && (
              <Grid item xs={12} display={"flex"}>
                <Typography variant="body2" color={"primary"} fontWeight={600}>
                  oficial product
                </Typography>
                <VerifiedIcon fontSize="small" sx={{ ml: 1 }} color="primary" />
              </Grid>
            )}
            <Typography variant="h5">{name}</Typography>
          </Grid>

          <Grid item xs={12} mt={3}>
            <Typography variant="body2">{descriptionShort}</Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="body1" fontWeight={600}>
              $ {price}
            </Typography>
          </Grid>

          <Grid item xs={12} display={"flex"}>
            <Typography variant="body1"> Units in stock:</Typography>
            <Typography variant="body1" fontWeight={600}>
              {stock}
            </Typography>
          </Grid>

          <Grid item xs={12} display={"flex"}>
            <Typography variant="body1"> Public: </Typography>
            <Typography variant="body1" fontWeight={600}>
              {available ? "Yes" : "No"}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1"> {descriptionLarge} </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
