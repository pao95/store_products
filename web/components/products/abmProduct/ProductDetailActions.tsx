import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Grid, IconButton } from "@mui/material";

export interface ProductDetailActionsProps {
  onClickEdit: () => void;
  onClickRemove: () => void;
}

/**
 * ProductDetailActions component renders actions for product details.
 * @param {Function} onClickEdit - Function to handle the edit action.
 * @param {Function} onClickRemove - Function to handle the remove action.
 */
export const ProductDetailActions = ({
  onClickEdit,
  onClickRemove,
}: ProductDetailActionsProps) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <IconButton onClick={onClickEdit} color="secondary">
          <EditIcon />
        </IconButton>
        <IconButton onClick={onClickRemove} color="secondary">
          <DeleteIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};
