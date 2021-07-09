import { fireEvent, render, screen } from "@testing-library/react";

import List from "./List";

import PostProvider from "../../Providers/PostProvider";

const post = [{
    url: "url",
    name: "name",
    vote: 3,
    createdAt: 2,
    updatedAt: 2
}, {
    url: "url",
    name: "name",
    vote: 2,
    createdAt: 4,
    updatedAt: 5
}]
describe("List", () => {

    it("should render List component", () => {
        render(<PostProvider>
            {
                localStorage.setItem("posts", JSON.stringify(post))
            }
            <List />
        </PostProvider>);

        const postList = screen.getByTestId("post-list");
        const vote = screen.getAllByTestId("vote-count");
        expect(postList).toBeInTheDocument();
        expect(vote[0].textContent).toBe("2")

        const select = screen.getByTestId("select");

        fireEvent.change(select, { target: { value: "1" } })

        fireEvent.change(select, { target: { value: "2" } })



    });
});
