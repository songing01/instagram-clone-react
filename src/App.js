import React, { useState } from "react";
import "./App.css";
import Post from "./Post";
function App() {
  const [posts, setPosts] = useState([
    {
      username: "jenny_kim",
      caption: "My catttt",
      userImage: "",
      imageUrl:
        "https://cdn.pixabay.com/photo/2021/02/08/11/00/kitten-5994369__340.jpg",
    },
    {
      username: "freedom_jm",
      caption: "Weather's good!",
      userImage: "",
      imageUrl:
        "https://cdn.pixabay.com/photo/2021/10/04/06/28/cactus-6679665__340.jpg",
    },
    {
      username: "peter.s",
      caption: "river view",
      userImage: "",
      imageUrl:
        "https://cdn.pixabay.com/photo/2022/01/29/16/21/fisherman-6977946__340.jpg",
    },
  ]);
  return (
    <div className="App">
      <div className="app_header">
        <img
          calssName="app_headerImage"
          src="https://fontmeme.com/images/instagram-new-logo.png"
          width={"100rem"}
          alt=""
        ></img>
      </div>
      <h1>Welcome to instagram clone!</h1>
      {posts.map((post) => (
        <Post
          username={post.username}
          userImage={post.userImage}
          imageUrl={post.imageUrl}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default App;
