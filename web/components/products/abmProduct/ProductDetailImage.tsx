import { Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
interface ProductDetailImageProps {
  src?: string;
}

/**
 * ProductDetailImage component renders an image for product details.
 * @param {string} src - Source of the image.
 */
export const ProductDetailImage = ({ src }: ProductDetailImageProps) => {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sx={{
          width: "100%",
          height: "340px",
          position: "relative",
        }}
      >
        <Image
          src={"/weights.jpg"}
          alt=""
          fill
          style={{
            objectFit: "contain",
          }}
        />
      </Grid>
    </Grid>
  );
};
