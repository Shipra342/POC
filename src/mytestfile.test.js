import { render, fireEvent, screen } from "@testing-library/react";
import React from "react";
import App from "./App";


test("open todo", () => {
  render(<App />);

  const countTodo = screen.getByTestId("countTodo");

  fireEvent.click(countTodo);
  expect(countTodo).toHaveTextContent("1");

});
