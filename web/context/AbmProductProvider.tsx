import { ReactNode, useReducer } from "react";
import { AbmProductContext } from "./AbmProductContext";
import { IProduct, IProductNew } from "@/interfaces/product";
import { abmProductReducer } from "./abmProductReducer";
import {
  createProduct,
  deleteProduct,
  updateProduct,
} from "@/services/products";

/**
 * Type definition for the modes of the product management.
 */
export type abmTypes = "edit" | "read" | "create";

export interface InitialStateProviderProduct {
  mode: abmTypes;
  showModalDelete: boolean;
}

interface DetailProductProviderProps {
  product?: IProduct;
  children: ReactNode;
  initialState: InitialStateProviderProduct;
  handleReturn: () => void;
  actionSuccesEdit?: () => void;
  actionSuccessCreate?: (id: string) => void;
}

export const productDetailDefault = {
  isOficial: false,
  name: "",
  descriptionShort: "",
  price: 0,
  stock: 0,
  available: false,
  descriptionLarge: "",
};

/**
 * Component providing context for product management.
 */
export const AbmProductProvider = ({
  product,
  children,
  handleReturn,
  initialState,
  actionSuccesEdit,
  actionSuccessCreate,
}: DetailProductProviderProps) => {
  const [state, dispatch] = useReducer(abmProductReducer, initialState);

  /**
   * Handles mode changes.
   * @param mode The mode to be set, necesary to change product view.
   */
  const handleChangeModeView = (mode: InitialStateProviderProduct["mode"]) => {
    switch (mode) {
      case "create":
        dispatch({ type: "show_create_mode" });
        break;
      case "edit":
        dispatch({ type: "show_edit_mode" });
        break;
      case "read":
        dispatch({ type: "show_read_mode" });
        break;
      default:
        dispatch({ type: "show_read_mode" });
        break;
    }
  };

  /**
   * Handles delete product modal visibility.
   * @param show Boolean indicating whether to show or hide the modal.
   */
  const handleModalDelete = (show: boolean) => {
    show
      ? dispatch({ type: "show_delete_modal" })
      : dispatch({ type: "hidde_delete_modal" });
  };

  /**
   * Handles editing confirmation.
   * @param product The product to be edited.
   */
  const handleConfirmEdit = async (product: IProduct) => {
    await updateProduct(product);
    dispatch({ type: "show_read_mode" });
    actionSuccesEdit && actionSuccesEdit();
  };

  /**
   * Handles deletion confirmation.
   */
  const handleConfirmDelete = async () => {
    const { id } = product as { id: number };
    await deleteProduct(id);
    handleReturn();
  };

  /**
   * Handles creation confirmation.
   * @param product The product to be created.
   */
  const handleConfirmCreate = async (product: IProductNew) => {
    console.log(product);
    const data = await createProduct(product);
    actionSuccessCreate && actionSuccessCreate(data.id.toString());
  };

  return (
    <AbmProductContext.Provider
      value={{
        ...state,
        product,

        handleChangeModeView,
        handleModalDelete,

        handleConfirmEdit,
        handleConfirmDelete,
        handleConfirmCreate,

        handleReturn,
      }}
    >
      {children}
    </AbmProductContext.Provider>
  );
};
