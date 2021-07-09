
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import PostElement from "./PostElement";

import PostProvider from "../../Providers/PostProvider"

const post = {
    url: "url",
    name: "name",
    vote: 1,
    createdAt: 1,
    updatedAt: 1
}

describe("PostElement", () => {
    const props = {
        name: post.name,
        url: post.url,
        setModalData: jest.fn(),
        setShowModal: jest.fn(),
        vote: post.vote
    }

    beforeEach(() => {
        render(<PostProvider>
            {
                localStorage.setItem("posts", JSON.stringify([post]))
            }
            <PostElement {...props} />
        </PostProvider>);
    });

    it("should render PostElement component", () => {
        const postElement = screen.getByTestId("post-element");
        const voteCount = screen.getByTestId("vote-count");
        const deleteButton = screen.getByTestId("delete-button");
        const urlHeader = screen.getByTestId("url-header");
        const url = screen.getByTestId("url");

        expect(postElement).toBeInTheDocument();
        expect(voteCount.textContent).toBe('1')

        fireEvent.click(deleteButton);

        expect(props.setModalData).toHaveBeenCalled()
        expect(props.setShowModal).toHaveBeenCalled()
        expect(urlHeader.textContent).toBe(props.name)
        expect(url.textContent).toBe(props.url)
    });

    it("Should update vote count when clicked upvote button", async () => {
        const upVote = screen.getByTestId("up-vote")
        const downVote = screen.getByTestId("down-vote")
        fireEvent.click(upVote)
        fireEvent.click(downVote)
    })

});