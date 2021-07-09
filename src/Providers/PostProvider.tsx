import React, { createContext, useState } from "react";
import { ToastProvider } from 'react-toast-notifications';
import { MemoryRouter } from "react-router-dom"

import { ORDER_STATUSES } from "../constants";

export const PostContext = createContext({} as any);

export interface Post {
  url: string;
  name: string;
  vote: number;
  createdAt: number;
  updatedAt: number;
}

const PostProvider = ({ children }: any) => {
  const [posts, setPosts] = useState<Array<Post>>(
    JSON.parse(localStorage.getItem("posts")!) || []
  );

  const addPost = (name: string, url: string) => {
    const newPost = {
      createdAt: Date.now(),
      name: name,
      url: url,
      vote: 0,
      updatedAt: Date.now(),
    };

    const tempPosts = [...posts, newPost];
    setPosts(tempPosts);

    localStorage.setItem("posts", JSON.stringify(tempPosts));
  };

  const upVote = (url: string) => {
    setPosts(
      posts.map((post) => {
        if (post.url === url) {
          post.vote++;
          post.updatedAt = Date.now();
        }
        return post;
      })
    );

    localStorage.setItem("posts", JSON.stringify(posts));
  };

  const downVote = (url: string) => {
    setPosts(
      posts.map((post) => {
        if (post.url === url) {
          post.vote--;
          post.updatedAt = Date.now();

        }
        return post;
      })
    );

    localStorage.setItem("posts", JSON.stringify(posts));
  };

  const deletePost = (url: string) => {
    const index = posts.findIndex((a) => a.url === url);
    posts.splice(index, 1);
    localStorage.setItem("posts", JSON.stringify(posts));
  };

  const orderedPosts = (posts: Array<Post>, orderStatus: number) => {
    if (orderStatus === ORDER_STATUSES.MOST_VOTED) {
      posts.sort((a, b) => b.vote - a.vote || b.updatedAt - a.updatedAt);
    } else if (orderStatus === ORDER_STATUSES.LESS_VOTED) {
      posts.sort((a, b) => a.vote - b.vote || b.updatedAt - a.updatedAt);
    } else {
      posts.sort((a, b) => b.updatedAt - a.updatedAt);
    }
    return posts;
  };

  return (
    <ToastProvider placement='top-center'>
      <PostContext.Provider
        value={{ posts, addPost, upVote, downVote, deletePost, orderedPosts }}
      >
        <MemoryRouter>
          {children}
        </MemoryRouter>
      </PostContext.Provider>
    </ToastProvider>

  );
};
export default PostProvider;
