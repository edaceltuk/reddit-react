import React, { useRef, useContext } from "react";
import { useToasts } from 'react-toast-notifications'
import { Link } from "react-router-dom";

import { PostContext } from "../../Providers/PostProvider";

import './addLink.sass'

const AddLlink = () => {
  const { addToast } = useToasts()
  const { addPost } = useContext(PostContext);
  const linkName = useRef<HTMLInputElement>(null);
  const link = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    addPost(linkName.current?.value, link.current?.value);
    addToast(`${linkName.current?.value} added`, {
      appearance: 'success',
      autoDismiss: true,
    })
  };

  return (
    <div className="add-link"  data-testid="add-link">
      <div className="add-link-wrapper">
        <Link to="/" data-testid="back-link">Return to list</Link>
        <h3>Add New Link</h3>
        <div className="add-link-form">
          <div className="name">
            <label> Link Name</label>
            <input ref={linkName} data-testid="url-name"/>
          </div>
          <div className="url">
            <label> Link Url</label>
            <input ref={link} data-testid="url"/>
          </div>
          <button onClick={() => handleClick()} data-testid="submit-button">ADD</button>
        </div>
      </div>
    </div>
  );
};

export default AddLlink;
