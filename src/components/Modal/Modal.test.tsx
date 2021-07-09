import { fireEvent, render, screen } from "@testing-library/react";
import Modal from "./Modal";
import PostProvider from "../../Providers/PostProvider"

describe("Modal", () => {


    it("should render modal component", () => {
        const setModalData = jest.fn
        const setShowModal = jest.fn

        render(<Modal data={{ url: "", name: "" }} setModalData={setModalData} setShowModal={setShowModal} />, {
            wrapper: PostProvider
        });

        const modal = screen.getByTestId("modal");
        expect(modal).toBeInTheDocument();
    });
    it("should render submit link", () => {
        const setModalData = jest.fn()
        const setShowModal = jest.fn()

        render(<Modal data={{ url: "", name: "" }} setModalData={setModalData} setShowModal={setShowModal} />, {
            wrapper: PostProvider
        });

        const deleteButton = screen.getByTestId("delete-button");
        const cancelButton = screen.getByTestId("top-cancel-button");
        const secondCancelButton = screen.getByTestId("bottom-cancel-button");

        expect(deleteButton).toBeInTheDocument()
        expect(cancelButton).toBeInTheDocument()

        fireEvent.click(cancelButton);
        expect(setShowModal).toHaveBeenCalled()

        fireEvent.click(secondCancelButton);
        expect(setShowModal).toHaveBeenCalled()

        fireEvent.click(deleteButton);
        expect(setShowModal).toHaveBeenCalled()

    });
});