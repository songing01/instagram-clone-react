import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
function Post({ username, caption, imageUrl, userImage }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar className="post__avatar" alt={username} src={userImage} />
        <h3>{username}</h3>
      </div>

      <img className="post__image" src={imageUrl} alt="" />
      <h4 className="post__text">
        <strong>{username}</strong> {caption}
      </h4>
    </div>
  );
}

export default Post;

//38:00
