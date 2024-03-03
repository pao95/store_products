import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

// Styles for typography with ellipsis overflow
const stylesTypografy = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
};

interface CardProductProps {
  name: string;
  descriptionShort: string;
  imageUrl?: string;
  id?: number;
}

/**
 * CardProduct component displays a card representing a product.
 * @param {string} name - The name of the product.
 * @param {string} descriptionShort - A short description of the product.
 * @param {string} imageUrl - The URL of the product image.
 * @param {number} id - The ID of the product.
 */
export const CardProduct = ({
  name,
  descriptionShort,
  imageUrl,
  id,
}: CardProductProps) => {
  return (
    <Card sx={{ width: "100% ", height: "310px", p: 1 }}>
      <CardActionArea component="div">
        <Link href={`/product/${id}`}>
          <CardMedia sx={{ display: "flex", justifyContent: "center" }}>
            <Image
              src={"/weights.jpg"}
              alt=""
              width={180}
              height={180}
              priority={true}
            />
          </CardMedia>
          <CardContent
            sx={{
              p: 0,
            }}
          >
            <Typography
              gutterBottom
              variant="subtitle1"
              sx={{
                ...stylesTypografy,
                WebkitLineClamp: 1,
              }}
            >
              {name}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                ...stylesTypografy,
                WebkitLineClamp: 2,
              }}
            >
              {descriptionShort}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Detail</Button>
          </CardActions>
        </Link>
      </CardActionArea>
    </Card>
  );
};
