import { render, fireEvent, screen } from "@testing-library/react";
import Todocard from './Components/Todocard';
import updateList from './Components/Todocard';
import React from "react";

test("edit todo", () => {
        const updateList = jest.fn();
        render(<Todocard />);
    
        const button = screen.findByTestId('button');
        fireEvent.click(edit);

        expect(updateList).toHaveBeenCalled();
});