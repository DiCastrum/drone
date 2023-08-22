import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Hero from "../../components/Hero";

describe("Hero component", () => {
  it("renders correctly", () => {
    render(<Hero />);

    expect(
      screen.getByText("Welcome to Axpo Drone Management")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Where your job is made easier")
    ).toBeInTheDocument();
  });
});
