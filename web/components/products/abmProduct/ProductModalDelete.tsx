import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

/**
 * ProductModalDelete component displays a modal dialog for confirming product deletion.
 * @param {function} handleConfirm - Function to handle the confirmation of deletion.
 * @param {function} handleClose - Function to handle the closing of the modal.
 * @param {boolean} open - State variable to control the visibility of the modal.
 */
interface ProductDeleteModalProps {
  handleConfirm: () => void;
  handleClose: () => void;
  open: boolean;
}
export const ProductModalDelete = ({
  handleConfirm,
  open,
  handleClose,
}: ProductDeleteModalProps) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Are you sure you want to delete the product?</DialogTitle>
      <DialogContent>
        <DialogContentText>This action cannot be undone.</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Disagree</Button>
        <Button onClick={handleConfirm} autoFocus variant="contained">
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
};
