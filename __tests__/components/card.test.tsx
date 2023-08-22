import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Card from "../../components/Card";

describe("Card component", () => {
  const mockProps = {
    ID: "123",
    Name: "Gyro",
    Type: "run-river",
    Latitude: "123.45623",
    Longitude: "47.45539",
    droneType: "restriction",
  };

  it("renders correctly with given props", () => {
    render(<Card {...mockProps} />);

    expect(screen.getByText("Gyro")).toBeInTheDocument();
    expect(screen.getByText("ID: 123")).toBeInTheDocument();
    expect(screen.getByText("run-river")).toBeInTheDocument();
  });
});
