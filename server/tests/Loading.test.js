import React from "react";
import { render } from "@testing-library/react";
import Loading from "../components/Loading";

test("Loading component snapshot", () => {
  const { asFragment } = render(<Loading />);
  expect(asFragment()).toMatchSnapshot();
});
