import { render, fireEvent, screen } from "@testing-library/react";
import React from "react";
import Landing from "./Components/Landing";

test("open todo", () => {

        render(<Landing />);
        const count = screen.getByTestId("count");

        fireEvent.click(count);

        expect(count).toHaveTextContent("1");

});