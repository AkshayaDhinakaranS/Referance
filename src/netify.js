import React from "react";
import "./index.css";

function Taskbar(props) {
  return <li className="navbar-item">{props.taskbar}</li>;
}

function Netify() {
  let tunes = ["myTunes", "Overview", "Music", "Video", "Gift Cards"];
  return (
    <div id="case">
      <nav className="navbar">
        <ul className="menu">
          {tunes.map((task, index) => (
            <Taskbar key={index} taskbar={task} />
          ))}
        </ul>
      </nav>
    </div>
  );
}

function Showcase() {
  return (
    <div className="tunes">
      <h1>myTunes</h1>
      <h2>Your music, movies, and TV shows take center stage.</h2>
    </div>
  );
}

export { Netify, Showcase };
