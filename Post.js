import React from "react";
import './Post.css';

function Post({ username, caption, imageUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <h3>{username}</h3>
      </div>
      <img className="post__image" src={imageUrl} alt="Post" />
      <h4 className="post__text"><strong>{username}</strong> {caption}</h4>
    </div>
  );
}

export default Post;
