
import { fireEvent, render, screen } from "@testing-library/react";

import AddLink from "./AddLink";
import PostProvider from "../../Providers/PostProvider"

describe("AddLink", () => {
    it("should render AddLink component", () => {
        render(<AddLink />, {
            wrapper: PostProvider
        });

        const addLink = screen.getByTestId("add-link");
        const backLink = screen.getByTestId("back-link");
        const urlName = screen.getByTestId("url-name");
        const url = screen.getByTestId("url");
        const submitButton = screen.getByTestId("submit-button");

        expect(addLink).toBeInTheDocument();
        expect(urlName).toBeInTheDocument();
        expect(url).toBeInTheDocument();
        expect(backLink).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();

        expect(backLink.getAttribute("href")).toBe('/')

        fireEvent.click(submitButton)

    });

});