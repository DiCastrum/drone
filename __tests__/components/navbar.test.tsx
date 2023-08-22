import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Navbar from "../../components/Navbar";

describe("Navbar component", () => {
  it("renders correctly", () => {
    render(<Navbar />);

    // Test logo presence
    const logoImage = screen.getByAltText("axpo logo");
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute("src", "/logo.svg");
    expect(logoImage).toHaveAttribute("width", "118");
    expect(logoImage).toHaveAttribute("height", "18");

    // Test navigation links
    const homeLink = screen.getByRole("link", { name: "Home" });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");
  });
});
