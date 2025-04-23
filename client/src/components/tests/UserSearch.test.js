const React = require("react");
const { render, screen } = require("@testing-library/react");
const UserSearch = require("../UserSearch");

describe("UserSearch Component", () => {
  test("renders search input", () => {
    render(<UserSearch />);
    expect(
      screen.getByPlaceholderText(/search github users/i)
    ).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<UserSearch />);
    expect(asFragment()).toMatchSnapshot();
  });
});
