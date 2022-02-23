import React from "react";
import "./App.css";
import Post from "./Post";
function App() {
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
      <h1>Hello</h1>
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default App;
