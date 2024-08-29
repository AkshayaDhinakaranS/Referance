import React, { useState } from "react";

function Errorpage() {
  let [style, setStyle] = useState({
    display: "flex",
    backgroundColor: "red",
    justifyContent: "center",
  });

  let [names, setNames] = useState("");

  let clr = "blue";

  return (
    <div>
      <h1
        style={style}
        onClick={() => {
          setStyle((prevStyle) => {
            return { ...prevStyle, backgroundColor: clr };
          });
        }}
      >
        Error 404
      </h1>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={names}
        onChange={(e) => {
          setNames(e.target.value);
        }}
      />
    </div>
  );
}

export default Errorpage;
