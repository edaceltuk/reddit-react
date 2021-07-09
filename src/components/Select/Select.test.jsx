
import { fireEvent, render, screen } from "@testing-library/react";

import Select from "./Select";

describe("Select", () => {

    beforeEach(() => {
        render(<Select setOrderBy={jest.fn()} />);
    });

    it("should render Select component", () => {
        const select = screen.getByTestId("select");
        const mostVoted = screen.getByTestId("most-voted");
        const lessVoted = screen.getByTestId("less-voted");

        expect(select).toBeInTheDocument();
        expect(mostVoted).toBeInTheDocument();
        expect(lessVoted).toBeInTheDocument();

        fireEvent.change(select, { target: { value: "1" } })
        expect(mostVoted.selected).toBeTruthy();
        expect(lessVoted.selected).toBeFalsy();

        fireEvent.change(select, { target: { value: "2" } })
        expect(lessVoted.selected).toBeTruthy();
        expect(mostVoted.selected).toBeFalsy();
    });

});