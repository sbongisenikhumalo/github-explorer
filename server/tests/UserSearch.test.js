import React from "react";
import { render, screen } from "@testing-library/react";
import UserSearch from "../components/UserSearch";

test("renders search input", () => {
  render(<UserSearch />);
  const inputElement = screen.getByPlaceholderText(/Search GitHub users/i);
  expect(inputElement).toBeInTheDocument();
});
