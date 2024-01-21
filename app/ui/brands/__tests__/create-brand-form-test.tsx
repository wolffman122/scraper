import { render, screen } from "@testing-library/react";
import CreateBrandForm from "../create-brand-form";
import userEvent from "@testing-library/user-event";
import { useFormState } from "react-dom";
import React from "react";


jest.spyOn(React, 'useFormState').mockImplementation((f) => f());


describe("Create Brand Form tests", () => {
  test("render correctly", () => {
    render(<CreateBrandForm />);

    expect(screen.getByText<HTMLLabelElement>("Enter a brand name")).toBeInTheDocument();
    expect(screen.getByText<HTMLLabelElement>("Enter a website URL")).toBeInTheDocument();
    expect(screen.getByText("Create Brand")).toBeInTheDocument();
    expect(screen.getByText("Cancel")).toBeInTheDocument();
  });
});