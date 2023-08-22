import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import DensityCard from "../../components/DensityCard";

describe("DensityCard component", () => {
  const mockProps = {
    id: 123,
    year: 2023,
    label: 42,
  };

  it("renders correctly with given props", () => {
    render(<DensityCard {...mockProps} />);

    expect(screen.getByText("ID: 123")).toBeInTheDocument();
    expect(screen.getByText("Year: 2023")).toBeInTheDocument();
    expect(screen.getByText("Label 42")).toBeInTheDocument();
  });
});
