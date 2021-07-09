
import { fireEvent, render, screen } from "@testing-library/react";

import Header from "./Header";

describe("Header", () => {

    beforeEach(() => {
        render(<Header setOrderBy={jest.fn()} />);
    });

    it("should render Header component", () => {
        const header = screen.getByTestId("header");

        expect(header).toBeInTheDocument();
        expect(screen.getByText(/Lorem Ipsum/i)).toBeInTheDocument();
        expect(screen.getByText(/Dolor Sit Amet/i)).toBeInTheDocument();


    });

});