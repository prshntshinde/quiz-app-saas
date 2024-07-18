import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "../src/app/page.tsx";

describe("Home", () => {
  it("renders a label", () => {
    render(<Home />);

    const label = screen.getByText("Home");

    expect(label).toBeInTheDocument();
  });
});
