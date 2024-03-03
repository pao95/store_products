import { IProduct } from "@/interfaces/product";
import { ReactNode, useContext } from "react";
import { ProductReadMode } from "./ProductReadMode";
import { ProductDetailActions } from "./ProductDetailActions";
import { ProductDetailImage } from "./ProductDetailImage";
import { AbmProductContext } from "@/context/AbmProductContext";
import { ProductForm } from "./ProductForm";
import { ProductModalDelete } from "./ProductModalDelete";
import {
  AbmProductProvider,
  InitialStateProviderProduct,
} from "@/context/AbmProductProvider";
import { Typography } from "@mui/material";

interface AbmProductProps {
  product?: IProduct;
  handleReturn: () => void;
  children: ReactNode;
  initialState: InitialStateProviderProduct;
  actionSuccesEdit?: () => void;
  actionSuccessCreate?: (idString: string) => void;
}

/**
 * AbmProduct component serves as a provider for managing product details and actions.
 * @param {IProduct} product - The product being managed.
 * @param {ReactNode} children - Child components.
 * @param {Function} handleReturn - Function to handle return action.
 * @param {InitialStateProviderProduct} initialState - Initial state for product management.
 * @param {Function} actionSuccesEdit - Callback function for successful edit action.
 * @param {Function} actionSuccessCreate - Callback function for successful creation action.
 */
export const AbmProduct = ({
  product,
  children,
  handleReturn,
  initialState,
  actionSuccesEdit,
  actionSuccessCreate,
}: AbmProductProps) => {
  return (
    <AbmProductProvider
      product={product}
      handleReturn={handleReturn}
      initialState={initialState}
      actionSuccesEdit={actionSuccesEdit}
      actionSuccessCreate={actionSuccessCreate}
    >
      {children}
    </AbmProductProvider>
  );
};

/**
 * Info component renders the product details in different modes (read, edit, create).
 */
const Info = () => {
  const {
    product,
    mode,
    handleConfirmEdit,
    handleConfirmCreate,
    handleChangeModeView,
    handleReturn,
  } = useContext(AbmProductContext);

  switch (mode) {
    case "edit":
      return (
        <ProductForm
          product={product}
          handleUpdate={handleConfirmEdit}
          handleCancel={() => handleChangeModeView("read")}
          mode="edit"
        />
      );
    case "create":
      return (
        <ProductForm
          product={product}
          handleCreate={handleConfirmCreate}
          handleCancel={handleReturn}
          mode="create"
        />
      );

    case "read":
      return <ProductReadMode product={product} />;
    default:
      return <ProductReadMode product={product} />;
  }
};
/**
 * Actions component renders actions for product management.
 */
const Actions = () => {
  const {
    mode,
    showModalDelete,
    handleChangeModeView,
    handleConfirmDelete,
    handleModalDelete,
  } = useContext(AbmProductContext);

  if (mode !== "read") return;

  return (
    <>
      <ProductDetailActions
        onClickEdit={() => handleChangeModeView("edit")}
        onClickRemove={() => handleModalDelete(true)}
      />
      <ProductModalDelete
        handleConfirm={handleConfirmDelete}
        handleClose={() => handleModalDelete(false)}
        open={showModalDelete}
      />
    </>
  );
};

interface ImageProps {
  src?: string;
}

/**
 * Image component renders a product image.
 * @param {string} src - The source URL of the image.
 */
const Image = ({ src }: ImageProps) => {
  return <ProductDetailImage src={src} />;
};

interface TitleProps {
  title: string;
}

/**
 * Title component renders a product title.
 * @param {string} title - The title of the product.
 */
const Title = ({ title }: TitleProps) => {
  return (
    <Typography variant={"subtitle1"} fontWeight={600}>
      {title}
    </Typography>
  );
};

AbmProduct.Info = Info;
AbmProduct.Actions = Actions;
AbmProduct.Image = Image;
AbmProduct.Title = Title;
