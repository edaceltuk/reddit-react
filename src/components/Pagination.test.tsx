
import { fireEvent, render, screen } from "@testing-library/react";
import Pagination from "./Pagination";

describe("Pagination", () => {
    let currentPage = 2
    const setCurrentPage = jest.fn()

    beforeEach(() => {
        render(<Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPageCount={4} />);
    });

    it("should render paginate component", () => {
        const paginate = screen.getByTestId("paginate");
        const nextButton = screen.getByTestId("next-button");
        const prevButton = screen.getByTestId("prev-button");

        expect(paginate).toBeInTheDocument();
        expect(nextButton).toBeInTheDocument();
        expect(prevButton).toBeInTheDocument();

        expect(nextButton.textContent).toBe("Next")
        expect(prevButton.textContent).toBe("Prev")
    });


    it("should render next button", () => {
        const items = screen.getAllByTestId("page-item");
        const nextButton = screen.getByTestId("next-button");
        const prevButton = screen.getByTestId("prev-button");

        fireEvent.click(nextButton);

        expect(items[1].getAttribute("data-active")).toBe("true")

        fireEvent.click(prevButton);
        expect(items[0].getAttribute("data-active")).toBe("true")

        fireEvent.click(items[1]);
        expect(items[1].getAttribute("data-active")).toBe("true")

    });
});