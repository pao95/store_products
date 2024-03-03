import { IProduct, IProductNew } from "@/interfaces/product";
import { fetchApi } from "../utils/fetchApi";

export const getProducts = async (): Promise<IProduct[]> => {
  try {
    const response = await fetch("http://localhost:3001/products");
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // Devuelve un array vacío en caso de error
  }
};

export const getProduct = async (id: string): Promise<IProduct | null> => {
  try {
    const response = await fetch(`http://localhost:3001/products/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null; // Devuelve null en caso de error
  }
};

export const updateProduct = async (product: IProduct): Promise<IProduct> => {
  return fetchApi(
    `http://localhost:3001/products/${product.id}`,
    "PUT",
    product
  )
    .then((data: any) => {
      return data;
    })
    .catch((error: Error) => {
      console.error("Error:", error.message);
    });
};

export const createProduct = async (
  product: IProductNew
): Promise<IProduct> => {
  return fetchApi("http://localhost:3001/products", "POST", product)
    .then((data: any) => {
      return data;
    })
    .catch((error: Error) => {
      console.error("Error:", error.message);
    });
};

export const deleteProduct = async (id: number): Promise<IProduct> => {
  return fetchApi(`http://localhost:3001/products/${id}`, "DELETE")
    .then((data: any) => {
      return data;
    })
    .catch((error: Error) => {
      console.error("Error:", error.message);
    });
};
