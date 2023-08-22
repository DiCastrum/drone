import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "../../components/Button";

describe("Button Component", () => {
  it("renders with title", () => {
    render(<Button title="Click me" />);
    const buttonElement = screen.getByText("Click me");
    expect(buttonElement).toBeInTheDocument();
  });

  it("calls handleClick function on button click", () => {
    const handleClickMock = jest.fn();
    render(<Button title="Click me" handleClick={handleClickMock} />);
    const buttonElement = screen.getByText("Click me");
    fireEvent.click(buttonElement);
    expect(handleClickMock).toHaveBeenCalledTimes(1);
  });
});
