import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("the counter starts at 0", () => {
  render(<App />);
  expect(screen.getByText("0")).toBeTruthy();
});

test("minus button has correct text", () => {
  render(<App />);
  expect(screen.getByText("-")).toBeTruthy();
});

test("plus button has correct text", () => {
  render(<App />);
  expect(screen.getByText("+")).toBeTruthy();
});

test("When the + button is pressed, the counter changes to 1", () => {
  render(<App />);
  const plusbutton = screen.getByRole("button", { name: "+" });
  userEvent.click(plusbutton);
  expect(screen.getByText("1")).toBeTruthy();
});

test("When the - button is pressed, the counter changes to -1", () => {
  render(<App />);
  const minusbutton = screen.getByRole("button", { name: "-" });
  userEvent.click(minusbutton);
  expect(screen.getByText("-1")).toBeTruthy();
});

test("on/off button has blue color", () => {
  render(<App />);
  const switchbutton = screen.getByRole("button", { name: "on/off" });
  expect(switchbutton).toHaveStyle("background-color: ButtonFace");
});

test("Prevent the -,+ button from being pressed when the on/off button is clicked", () => {
  render(<App />);
  const switchbutton = screen.getByRole("button", { name: "on/off" });
  const minusbutton = screen.getByRole("button", { name: "-" });
  const plusbutton = screen.getByRole("button", { name: "+" });
  userEvent.click(switchbutton);
  expect(minusbutton).toBeDisabled();
  expect(plusbutton).toBeDisabled();
});
