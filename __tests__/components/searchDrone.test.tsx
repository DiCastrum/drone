import React from "react";
import { render, screen } from "@testing-library/react";
import SearchDrone from "../../components/SearchDrone";

describe("SearchDrone component", () => {
  const mockProps = {
    droneList: ["Drone 1", "Drone 2", "Drone 3"],
    droneName: "Drone 1",
    setDroneName: jest.fn(),
  };

  it("renders correctly with given props", () => {
    render(<SearchDrone {...mockProps} />);

    // Check if the input field and options are rendered
    const inputElement = screen.getByPlaceholderText("Drone Name...");
    expect(inputElement).toBeInTheDocument();

    const optionElements = screen.getAllByRole("option");
    expect(optionElements).toHaveLength(3);
  });
});
