import { productDetailDefault } from "@/context/AbmProductProvider";
import { useForm } from "@/hooks/useForm";
import { IProduct, IProductNew } from "@/interfaces/product";
import { Button, Grid, Switch, TextField, Typography } from "@mui/material";

interface ProductEditModeProps {
  product?: IProduct;
  handleUpdate?: (product: IProduct) => void;
  handleCreate?: (product: IProductNew) => void;
  handleCancel: () => void;
  mode: "edit" | "create";
}

interface FormValues {
  isOficial: boolean;
  name: string;
  descriptionShort: string;
  price: number;
  stock: number;
  available: boolean;
  descriptionLarge: string;
}

/**
 * ProductForm component renders a form for editing or creating a product.
 * @param {object} product - The product to edit.
 * @param {function} handleUpdate - Function to handle the update action.
 * @param {function} handleCreate - Function to handle the create action.
 * @param {function} handleCancel - Function to handle the cancel action.
 * @param {string} mode - Mode of the form, "edit" or "create".
 */
export const ProductForm = ({
  product,
  handleUpdate,
  handleCreate,
  handleCancel,
  mode,
}: ProductEditModeProps) => {
  const editMode = mode === "edit" && product;

  const { values, handleChangeInput, handleChangeSwitch } = useForm<FormValues>(
    product ? product : productDetailDefault
  );

  const handleConfirmUpdate = (event: React.FormEvent) => {
    event.preventDefault();
    if (handleUpdate) {
      const { id } = product as { id: number };

      handleUpdate({
        id,
        ...values,
      });
    }
  };

  const handleConfirmCreate = (event: React.FormEvent) => {
    event.preventDefault();
    if (handleCreate) {
      handleCreate({
        ...values,
      });
    }
  };
  return (
    <Grid container>
      <Grid item xs={12}>
        <form onSubmit={editMode ? handleConfirmUpdate : handleConfirmCreate}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid item xs={12} sm={8} display={"flex"} alignItems={"center"}>
                <Typography variant="body2" color={"primary"} fontWeight={600}>
                  oficial product
                </Typography>
                <Switch
                  checked={values.isOficial}
                  name="isOficial"
                  onChange={handleChangeSwitch}
                  role="checkbox"
                />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid item xs={12} sm={8} display={"flex"} alignItems={"center"}>
                <TextField
                  label="Name product"
                  value={values.name}
                  name="name"
                  fullWidth
                  size="small"
                  onChange={handleChangeInput}
                />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid item xs={12} sm={8}>
                <TextField
                  label="Short description"
                  value={values.descriptionShort}
                  name="descriptionShort"
                  onChange={handleChangeInput}
                  fullWidth
                  size="small"
                />
              </Grid>
            </Grid>

            <Grid item xs={12} sm={3}>
              <TextField
                label="Price"
                value={values.price}
                name="price"
                onChange={handleChangeInput}
                fullWidth
                size="small"
                type="number"
              />
            </Grid>

            <Grid item xs={12} sm={3} display={"flex"}>
              <TextField
                label="Units in stock"
                value={values.stock}
                name="stock"
                onChange={handleChangeInput}
                fullWidth
                size="small"
                type="number"
              />
            </Grid>

            <Grid item xs={12} display={"flex"} alignItems={"center"}>
              <Typography variant="body1"> Public: </Typography>

              <Switch
                checked={values.available}
                name="available"
                onChange={handleChangeSwitch}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Large description"
                value={values.descriptionLarge}
                name="descriptionLarge"
                onChange={handleChangeInput}
                fullWidth
                size="small"
                multiline
                minRows={3}
              />
            </Grid>

            <Grid item xs={12} display={"flex"} justifyContent={"right"}>
              <Button onClick={handleCancel}>Cancel</Button>
              <Button variant="contained" sx={{ ml: 1 }} type="submit">
                Save
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};
