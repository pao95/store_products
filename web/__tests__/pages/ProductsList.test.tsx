import { IProduct } from "@/interfaces/product";
import ListProductsPage from "@/pages";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

let productList: IProduct[] = [];

beforeAll(() => {
  productList = [
    {
      id: 1,
      name: "Treadmill Pro-1000",
      imageUrl: "https://example.com/treadmill.jpg",
      stock: 10,
      price: 799.99,
      available: true,
      isOficial: true,
      descriptionLarge:
        "This high-quality treadmill is designed to give you the best home workout experience. With a powerful 2.5 HP motor, spacious running surface, and advanced exercise tracking features, it will help you reach your fitness goals.",
      descriptionShort:
        "Professional treadmill with 2.5 HP motor and spacious surface.",
    },
    {
      id: 3,
      name: "Compression Sports Leggings",
      imageUrl: "https://example.com/sports-leggings.jpg",
      stock: 15,
      price: 29.99,
      available: true,
      isOficial: true,
      descriptionLarge:
        "These sports leggings are designed to provide you with comfort and performance during your workouts. With breathable fabric and graduated compression, they help you stay cool and maintain muscle stability while you move.",
      descriptionShort: "Compression sports leggings for intense workouts.",
    },
    {
      id: 6,
      name: "Dumbbell Set",
      imageUrl: "https://example.com/dumbbell-set.jpg",
      stock: 12,
      price: 99.99,
      available: true,
      isOficial: true,
      descriptionLarge:
        "This dumbbell set is perfect for strength training exercises at home. With a variety of weight options and a durable construction, it's suitable for both beginners and experienced lifters.",
      descriptionShort: "Dumbbell set for home strength training.",
    },
  ];
});

beforeEach(() => {
  render(<ListProductsPage products={productList} />);
});

jest.mock("next/router", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe("Main component rendering tests", () => {
  test("render button add product", async () => {
    expect(
      await screen.findByRole("button", { name: "New product" })
    ).toBeInTheDocument();
  });

  test("render search product", async () => {
    const inputSearch = screen.getByRole("combobox");

    expect(await screen.findByLabelText("Search by name")).toBeInTheDocument();
    expect(inputSearch).toBeInTheDocument();
  });

  test("render icon filter products", () => {
    const inputSearch = screen.getByTestId("FilterAltIcon");

    expect(inputSearch).toBeInTheDocument();
  });

  test("render icon filter products", () => {
    const inputSearch = screen.getByTestId("FilterAltIcon");
    expect(inputSearch).toBeInTheDocument();
  });
});

describe("Cards products test", () => {
  test("Test to verify the quantity of detail buttons", async () => {
    const buttons = await screen.findAllByRole("button", { name: "Detail" });
    expect(buttons.length).toBe(productList.length);
  });
  /*TODO: test navegacion */
});
