import { useFilter } from "@/hooks/useFilter";
import { IProduct } from "@/interfaces/product";
import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";

const mockProducts: IProduct[] = [
  //**TODO: Este array esta repetido en otro archivo, dejarlo en un solo lugar */
  {
    id: 1,
    name: "Product A",
    isOficial: false,
    stock: 10,
    available: true,
    descriptionLarge: "",
    price: 1,
    imageUrl: "",
    descriptionShort: "",
  },
  {
    id: 2,
    name: "Product B",
    isOficial: false,
    stock: 0,
    available: false,
    descriptionLarge: "",
    price: 1,
    imageUrl: "",
    descriptionShort: "",
  },
  {
    id: 3,
    name: "Product C",
    isOficial: false,
    stock: 5,
    available: false,
    descriptionLarge: "",
    price: 1,
    imageUrl: "",
    descriptionShort: "",
  },
];

describe("useFilter hook tests", () => {
  test("should initialize with all products", () => {
    const { result } = renderHook(() => useFilter(mockProducts));

    expect(result.current.productsFilter).toEqual(mockProducts);
  });

  test("should filter by name", () => {
    const { result } = renderHook(() => useFilter(mockProducts));

    act(() => {
      result.current.filterByCondition("name", "Product A");
    });

    expect(result.current.productsFilter).toEqual([mockProducts[0]]);
  });

  test('should filter by condition "isNotOficial"', () => {
    const { result } = renderHook(() => useFilter(mockProducts));

    act(() => {
      result.current.filterByCondition("isNotOficial");
    });

    expect(result.current.productsFilter.length).toEqual(
      mockProducts.filter((item) => !item.isOficial).length
    );
  });

  test("should handle filtering when no products match condition", () => {
    const { result } = renderHook(() => useFilter(mockProducts));

    act(() => {
      result.current.filterByCondition("isOficial");
    });

    expect(result.current.productsFilter.length).toEqual(0);
  });
});
