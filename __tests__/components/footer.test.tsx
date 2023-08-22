import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "../../components/Footer";

describe("Footer component", () => {
  it("renders the copyright text", () => {
    render(<Footer />);
    const copyrightText = screen.getByText(
      /Copyright © 2023. All Rights Reserved/i
    );
    expect(copyrightText).toBeInTheDocument();
  });
});
