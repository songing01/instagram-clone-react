import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
function Post() {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt="Song"
          src="/static/images/avatar/1.jpg"
        />
        <h3>username</h3>
      </div>

      <img
        className="post__image"
        src="https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559__340.jpg"
        alt=""
      />
      <h4 className="post__text">
        <strong>usename</strong> caption
      </h4>
    </div>
  );
}

export default Post;

//38:00
