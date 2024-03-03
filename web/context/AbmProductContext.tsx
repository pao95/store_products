import { IProduct, IProductNew } from "@/interfaces/product";
import { createContext } from "react";
import { InitialStateProviderProduct, abmTypes } from "./AbmProductProvider";

export interface IAbmProductContext {
  mode: abmTypes;
  product?: IProduct;
  showModalDelete: boolean;
  handleChangeModeView: (mode: InitialStateProviderProduct["mode"]) => void;
  handleConfirmEdit: (product: IProduct) => void;
  handleConfirmCreate: (product: IProductNew) => void;
  handleConfirmDelete: () => void;
  handleModalDelete: (show: boolean) => void;
  handleReturn: () => void;
}

export const AbmProductContext = createContext({} as IAbmProductContext);
