import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DeleteBrand, UpdateBrand } from "../buttons";;

describe("Brand Buttons", () => {
  it("should render edit button", () => {
    const jsx = UpdateBrand({ id: "1234" });
    render(jsx);

    const link = screen.getByRole("link", { id: "1234" });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/brands/1234/edit");
    expect(link).toHaveAttribute("class", "rounded-md border p-2 bg-orange-700 hover:bg-orange-200");

    const icon = screen.getByTitle("pencil");
    expect(icon).toBeInTheDocument();
  });

  it("should render delete button", () => {
    const jsx = DeleteBrand({ id: "1234" });
    render(jsx);

    const link = screen.getByRole("button");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("class", "rounded-md border p-2 bg-orange-700 hover:bg-orange-200");

    const icon = screen.getByTitle("trash");
    expect(icon).toBeInTheDocument();
  });
});