import { render, screen } from "@testing-library/react";
import BrandTable from "../table";
import { fetchBrands } from "@/app/lib/action";
// import { mockFetchBrands } from "../../../lib/action";

// jest.mock("../../../lib/action");
// mockFetchBrands.mockImplementaiton(() => Promise.resolve())

jest.mock("../../../lib/action", () => ({
  ...(jest.requireActual("../../../lib/action")),
  fetchBrands: jest.fn()
}));

describe("Brand Table Tests", () => {

  afterEach(jest.clearAllMocks);

  test("Render headers", async () => {
    const jsx = await BrandTable();
    render(jsx);

    expect(screen.getByText("Brand Name")).toBeInTheDocument();
    expect(screen.getByText("Website")).toBeInTheDocument();
    expect(screen.getByText("Create Date")).toBeInTheDocument();
    expect(screen.getByText("Edit")).toBeInTheDocument();
  });


  test("Render brands", async () => {
    fetchBrands.mockReturnValue([
      {
        id: 1,
        name: "Brand 1",
        website: "www.brand1.com",
        createdAt: new Date()
      },
      {
        id: 2,
        name: "Brand 2",
        website: "www.brand2.com",
        createdAt: new Date()
      }
    ]);

    const jsx = await BrandTable();
    render(jsx);
    
    expect(screen.getByText("Brand Name")).toBeInTheDocument();
    expect(screen.getByText("Website")).toBeInTheDocument();
    expect(screen.getByText("Create Date")).toBeInTheDocument();
    expect(screen.getByText("Edit")).toBeInTheDocument();
    expect(screen.getByText("Brand 1")).toBeInTheDocument();
    expect(screen.getByText("Brand 2")).toBeInTheDocument();
    fetchBrands
  });

  // test("Render delete buttons", async () => {
  //   fetchBrands.mockReturnValue([
  //     {
  //       id: 1,
  //       name: "Brand 1",
  //       website: "www.brand1.com",
  //       createdAt: new Date()
  //     },
  //     {
  //       id: 2,
  //       name: "Brand 2",
  //       website: "www.brand2.com",
  //       createdAt: new Date()
  //     }
  //   ]);

  //   const jsx = await BrandTable();
  //   render(jsx);
    
  //   expect(screen.getByText("Brand Name")).toBeInTheDocument();
  //   expect(screen.getByText("Website")).toBeInTheDocument();
  //   expect(screen.getByText("Create Date")).toBeInTheDocument();
  //   expect(screen.getByText("Edit")).toBeInTheDocument();
  //   expect(screen.getByText("Brand 1")).toBeInTheDocument();
  //   expect(screen.getByText("Brand 2")).toBeInTheDocument();
  //   expect(screen.getByText("Delete")).toBeInTheDocument();
  //   fetchBrands
  // });
});
