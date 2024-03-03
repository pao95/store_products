import { InitialStateProviderProduct } from "@/context/AbmProductProvider";
import {
  abmProductActionType,
  abmProductReducer,
} from "@/context/abmProductReducer";

describe("abmProductReducer tests", () => {
  const initialState: InitialStateProviderProduct = {
    mode: "read",
    showModalDelete: false,
  };

  test("should switch to edit mode", () => {
    const action: abmProductActionType = { type: "show_edit_mode" };
    const newState = abmProductReducer(initialState, action);
    expect(newState.mode).toBe("edit");
  });

  test("should switch to read mode", () => {
    const action: abmProductActionType = { type: "show_read_mode" };
    const newState = abmProductReducer(initialState, action);
    expect(newState.mode).toBe("read");
  });

  test("should switch to create mode", () => {
    const action: abmProductActionType = { type: "show_create_mode" };
    const newState = abmProductReducer(initialState, action);
    expect(newState.mode).toBe("create");
  });

  test("should show delete modal", () => {
    const action: abmProductActionType = { type: "show_delete_modal" };
    const newState = abmProductReducer(initialState, action);
    expect(newState.showModalDelete).toBe(true);
  });

  test("should hide delete modal", () => {
    const action: abmProductActionType = { type: "hidde_delete_modal" };
    const newState = abmProductReducer(
      { ...initialState, showModalDelete: true },
      action
    );
    expect(newState.showModalDelete).toBe(false);
  });
});
