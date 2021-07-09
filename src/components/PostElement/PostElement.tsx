

import React, { useContext, useState } from 'react';

import { PostContext } from "../../Providers/PostProvider";

import Delete from "../../assets/images/delete.png";

import './postElement.sass'

type PostElementType = {
    header: string,
    url: string,
    setModalData: Function,
    setShowModal: Function,
    vote: number
}

const PostElement = (props: PostElementType) => {
    const { upVote, downVote } = useContext(PostContext);
    const { header, url, setModalData, vote, setShowModal } = props

    return (
        <div className="post-element" data-testid="post-element">
            <div className="vote" data-testid="vote">
                <span data-testid="vote-count">{vote}</span>
                <p>Points</p>
            </div>
            <div className="post-detail" data-testid="post-detail">
                <img src={Delete} onClick={() => {
                    setModalData({ header, url });
                    setShowModal(true);
                }}
                    className="delete-button" alt="delete" data-testid="delete-button" />
                <h4 data-testid="url-header">{header}</h4>
                <p data-testid="url" >{url}</p>
                <div className="vote-container" data-testid="vote-container">
                    <button onClick={() => upVote(url)} data-testid="up-vote">Up Vote</button>
                    <button onClick={() => downVote(url)} data-testid="down-vote">Down Vote</button>
                </div>
            </div>
        </div>
    );
};

export default PostElement;