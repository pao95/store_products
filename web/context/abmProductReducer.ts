import { InitialStateProviderProduct } from "./AbmProductProvider";

/**
 * Type definition for the actions that can be dispatched to the abmProductReducer.
 */
export type abmProductActionType =
  | { type: "show_read_mode" }
  | { type: "show_edit_mode" }
  | { type: "show_create_mode" }
  | { type: "show_delete_modal" }
  | { type: "hidde_delete_modal" };

/**
 * Reducer function to manage state changes related to product management modes and delete modal visibility.
 * @param state The current state.
 * @param action The action to be performed.
 * @returns The new state based on the action.
 */
export const abmProductReducer = (
  state: InitialStateProviderProduct,
  action: abmProductActionType
): InitialStateProviderProduct => {
  switch (action.type) {
    case "show_edit_mode":
      return {
        ...state,
        mode: "edit",
      };
    case "show_read_mode":
      return {
        ...state,
        mode: "read",
      };
    case "show_create_mode":
      return {
        ...state,
        mode: "create",
      };
    case "show_delete_modal":
      return {
        ...state,
        showModalDelete: true,
      };
    case "hidde_delete_modal":
      return {
        ...state,
        showModalDelete: false,
      };
    default:
      return state;
  }
};
