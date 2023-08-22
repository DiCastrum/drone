import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event"; // Import userEvent for simulating user interactions
import SearchBar from "../../components/SearchBar";

describe("SearchBar component", () => {
  const mockDroneList = ["drone1", "drone2", "drone3"];

  it("handles search correctly", () => {
    render(<SearchBar droneList={mockDroneList} />);

    const input = screen.getByRole("textbox", { name: "Drone Name..." });

    userEvent.type(input, "drone2");

    const searchButton = screen.getByRole("button", { name: "" });

    fireEvent.click(searchButton);

    expect(input).toHaveValue("drone2");
  });
});
