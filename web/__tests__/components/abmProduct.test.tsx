import { AbmProduct } from "@/components/products/abmProduct/AbmProduct";
import {
  AbmProductProvider,
  InitialStateProviderProduct,
} from "@/context/AbmProductProvider";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const initialState: InitialStateProviderProduct = {
  mode: "read",
  showModalDelete: false,
};

const handleReturnMock = jest.fn();
const actionSuccesEditMock = jest.fn();
const actionSuccessCreateMock = jest.fn();

beforeEach(() => {
  render(
    <AbmProductProvider
      initialState={initialState}
      handleReturn={handleReturnMock}
    >
      <AbmProduct initialState={initialState} handleReturn={handleReturnMock}>
        <AbmProduct.Info />
        <AbmProduct.Actions />
        <AbmProduct.Image src="test-image-url" />
        <AbmProduct.Title title="Test Title" />
      </AbmProduct>
    </AbmProductProvider>
  );
});

describe("AbmProduct tests", () => {
  test("render title", () => {
    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });

  test("thee edit button should disappear when in edit mode", async () => {
    const button = await screen.findByTestId("EditIcon");
    fireEvent.click(button);
    expect(button).not.toBeInTheDocument();
  });

  test("type input name product", async () => {
    const button = await screen.findByTestId("EditIcon");
    fireEvent.click(button);

    const input = await screen.findByLabelText("Name product");
    await userEvent.type(input, "Dumbbells");
    expect(input).toHaveValue("Dumbbells");
  });

  test("thee delete button should not disappear when in edit mode", async () => {
    const button = await screen.findByTestId("DeleteIcon");
    fireEvent.click(button);
    expect(button).toBeInTheDocument();
  });
});
