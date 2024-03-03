import { IProduct } from "@/interfaces/product";
import { useState } from "react";

export type conditionTypes =
  | "isOficial"
  | "isNotOficial"
  | "not_available"
  | "without_stock"
  | "categories" /*TODO: add categories to the products*/
  | "name"
  | "";

/**
 * Custom hook to filter a list of products based on various conditions.
 * @param products The list of products to filter.
 * @returns An object containing the filtered list of products and a function to apply filtering conditions.
 */
export const useFilter = (products: IProduct[]) => {
  const [productsFilter, setProductsFilter] = useState(products);

  const [applyFilter, setApplyFilter] = useState("");

  /**
   * Filters the list of products based on the given condition and value.
   * @param condition The filtering condition to apply.
   * @param value The value to filter by (optional).
   */
  const filterByCondition = (condition: conditionTypes, value: string = "") => {
    setApplyFilter(condition);
    switch (condition) {
      case "isOficial":
        setProductsFilter(products.filter((product) => product.isOficial));

        break;
      case "isNotOficial":
        setProductsFilter(products.filter((product) => !product.isOficial));
        break;
      case "without_stock":
        setProductsFilter(products.filter((product) => product.stock === 0));
        break;
      case "not_available":
        setProductsFilter(products.filter((product) => !product.available));
        break;
      case "name":
        setProductsFilter(
          products.filter((product) =>
            product.name.toLowerCase().includes(value.toLowerCase())
          )
        );
        break;

      default:
        setProductsFilter(products);
        break;
    }
  };

  return {
    productsFilter,
    filterByCondition,
    applyFilter,
  };
};
