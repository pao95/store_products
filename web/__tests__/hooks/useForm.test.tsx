import { useForm } from "@/hooks/useForm";
import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";

describe("useForm hook tests", () => {
  test("should initialize values correctly", () => {
    const initialValues = { name: "John", age: 30, isActive: true };
    const { result } = renderHook(() => useForm(initialValues));

    expect(result.current.values).toEqual(initialValues);
  });

  test("should update values on input change", () => {
    const { result } = renderHook(() => useForm({ name: "", age: 0 }));

    act(() => {
      result.current.handleChangeInput({
        target: { name: "name", value: "Pao" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.values.name).toBe("Pao");
  });

  test("should update values on switch change", () => {
    const { result } = renderHook(() => useForm({ isActive: false }));

    act(() => {
      result.current.handleChangeSwitch({
        target: { name: "isActive", checked: true },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.values.isActive).toBe(true);
  });

  test("should reset values to initial state", () => {
    const initialValues = { name: "Pao", age: 28, isActive: true };
    const { result } = renderHook(() => useForm(initialValues));

    act(() => {
      result.current.handleChangeInput({
        target: { name: "name", value: "Nico" },
      } as React.ChangeEvent<HTMLInputElement>);
      result.current.handleChangeSwitch({
        target: { name: "isActive", checked: false },
      } as React.ChangeEvent<HTMLInputElement>);
      result.current.resetForm();
    });

    expect(result.current.values).toEqual(initialValues);
  });
});
