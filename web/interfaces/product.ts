export interface IProduct {
  id: number;
  available: boolean;
  descriptionLarge: string;
  descriptionShort: string;
  imageUrl?: string;
  name: string;
  price: number;
  stock: number;
  isOficial: boolean;
}

export interface IProductNew {
  available: boolean;
  descriptionLarge: string;
  descriptionShort: string;
  name: string;
  price: number;
  stock: number;
  isOficial: boolean;
}
