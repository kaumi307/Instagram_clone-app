import React from "react";
import './App.css';
import Post from "./Post";

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
          alt="Instagram logo"
        />
      </div>
      <Post username="user1" caption="Wow this works!" imageUrl="https://via.placeholder.com/150" />
      <Post username="user2" caption="Amazing picture!" imageUrl="https://via.placeholder.com/150" />
      <Post username="user3" caption="Great shot!" imageUrl="https://via.placeholder.com/150" />
    </div>
  );
}

export default App;
